'use strict';

const deepmerge = require('deepmerge');
const minimatch = require('minimatch');
const htmlEscaper = require('html-escaper');
const sanitizeHtml = require('sanitize-html');
const natural = require('natural');

const { TfIdf } = natural;

module.exports = (options) => {
  options = deepmerge({
    pattern: '**/*',
    maxRelated: 3,
    natural: {
      minTfIdf: 0,
      maxTerms: 10,
    },
    sanitizeHtml: {
      allowedTags: [],
      allowedAttributes: {},
      nonTextTags: ['pre'],
    },
  }, options || {});

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

    // For each collection of files
    Object.keys(collections)
      .forEach((collection) => {
        const collectionFiles = collections[collection];

        // For each file in the collection
        collectionFiles
          .forEach((filename) => {
            const tfidf = new TfIdf();

            // Gather filenames in order
            const documentFilenames = [filename, ...collectionFiles
              .filter((relatedFilename) => relatedFilename !== filename)];

            // Add each file to tf-idf
            documentFilenames
              .forEach((documentFilename) => {
                const contents = files[documentFilename].contents.toString();
                const sanitized = htmlEscaper
                  .unescape(sanitizeHtml(contents, options.sanitizeHtml))
                  .trim();
                tfidf.addDocument(sanitized);
              });

            // Find key terms
            const terms = tfidf.listTerms(0)
              .filter((term) => term.tfidf >= options.natural.minTfIdf)
              .map((term) => term.term)
              .slice(0, options.natural.maxTerms);

            // Find related files
            let relatedFiles = [];
            tfidf.tfidfs(terms, (i, measure) => {
              relatedFiles.push({
                filename: documentFilenames[i],
                measure,
              });
            });
            relatedFiles = relatedFiles
              .slice(1)
              .sort((a, b) => {
                // Sort by `measure` descending first
                if (b.measure > a.measure) {
                  return 1;
                }
                if (b.measure < a.measure) {
                  return -1;
                }
                // Sort by filename ascending second
                return a.filename > b.filename;
              })
              .slice(0, options.maxRelated)
              .map((related) => files[related.filename]);

            // Set related info in the file's metadata
            if (!files[filename].related) {
              files[filename].related = {};
            }
            files[filename].related[collection] = relatedFiles;
          });
      });

    done();
  };
};
