'use strict';

const os = require('os');

const deepmerge = require('deepmerge');
const minimatch = require('minimatch');
const async = require('async');
const htmlEscaper = require('html-escaper');
const sanitizeHtml = require('sanitize-html');
const retext = require('retext');
const pos = require('retext-pos');
const keywords = require('retext-keywords');
const nlcstToString = require('nlcst-to-string');
const stringSimilarity = require('string-similarity');

module.exports = (options) => {
  options = deepmerge({
    pattern: '**/*',
    maxRelated: 3,
    parallelism: os.cpus().length,
  }, options || {}, { arrayMerge: (destinationArray, sourceArray) => sourceArray });

  return (files, metalsmith, done) => {
    // Filter files to be considered
    const keywordFiles = Object.keys(files)
      .filter(minimatch.filter(options.pattern))
      .filter((filename) => files[filename].collection);

    // Create a map of collection->files
    const collections = {};
    keywordFiles
      .forEach((filename) => {
        files[filename].collection
          .forEach((collection) => {
            if (!collections[collection]) {
              collections[collection] = [];
            }
            collections[collection].push(filename);
          });
      });

    const fileKeywords = {};

    // Find each file's keywords
    async.eachLimit(keywordFiles, options.parallelism, (filename, complete) => {
      const file = files[filename];

      if (file.keywords) {
        fileKeywords[filename] = file.keywords;
        complete();
        return;
      }

      // Read file contents, stripping
      const contents = htmlEscaper.unescape(sanitizeHtml(file.contents.toString(), {
        allowedTags: [],
        allowedAttributes: {},
        nonTextTags: ['code', 'pre'],
      }))
        .trim();

      retext()
        .use(pos)
        .use(keywords)
        .process(contents, (err, parsed) => {
          if (err) {
            throw err;
          }

          if (parsed.data.keywords) {
            fileKeywords[filename] = parsed.data.keywords
              .map((keyword) => nlcstToString(keyword.matches[0].node));
          }

          complete();
        });
    }, () => {
      // For each collection of files
      Object.keys(collections)
        .forEach((collection) => {
          const collectionFiles = collections[collection];

          // For each file in the collection
          collectionFiles
            .forEach((filename) => {
              // Find the top related files in the collection
              const relatedFilenames = collectionFiles
                .filter((relatedFilename) => relatedFilename !== filename)
                .map((relatedFilename) => ({
                  filename: relatedFilename,
                  similarity: stringSimilarity.compareTwoStrings(fileKeywords[filename].join(' '), fileKeywords[relatedFilename].join(' ')),
                }))
                .sort((a, b) => b.similarity - a.similarity)
                .slice(0, options.maxRelated)
                .map((related) => files[related.filename]);

              // Set related info in the file's metadata
              if (!files[filename].related) {
                files[filename].related = {};
              }
              files[filename].related[collection] = relatedFilenames;
            });
        });

      done();
    });
  };
};
