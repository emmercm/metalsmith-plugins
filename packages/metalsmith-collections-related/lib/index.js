import deepmerge from 'deepmerge';
import * as htmlEscaper from 'html-escaper';
import natural from 'natural';
import sanitizeHtml from 'sanitize-html';

const { TfIdf } = natural;
export default (options = {}) => {
  const defaultedOptions = deepmerge({
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
    const debug = metalsmith.debug('metalsmith-collections-related');
    debug('running with options: %O', defaultedOptions);
    // Filter files to be considered
    const keywordFiles = metalsmith.match(defaultedOptions.pattern, Object.keys(files))
      .filter((filename) => files[filename].collection);
    debug('processing files: %O', keywordFiles);
    // Create a map of collection->files
    const collections = {};
    keywordFiles
      .forEach((filename) => {
        let _a;
        const fileCollections = ((_a = files[filename].collection) !== null && _a !== void 0 ? _a : []);
        fileCollections
          .forEach((collection) => {
            // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            if (!collections[collection]) {
              // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
              collections[collection] = [];
            }
            // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            collections[collection].push(filename);
          });
      });
    // For each collection of files
    Object.keys(collections)
      .forEach((collection) => {
        debug('processing collection: %s', collection);
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
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
                  .unescape(sanitizeHtml(contents, defaultedOptions.sanitizeHtml))
                  .trim();
                tfidf.addDocument(sanitized);
              });
            // Find key terms
            const terms = tfidf.listTerms(0)
              .filter((term) => term.tfidf >= defaultedOptions.natural.minTfIdf)
              .map((term) => term.term)
              .slice(0, defaultedOptions.natural.maxTerms);
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
                return a.filename > b.filename ? 1 : -1;
              })
              .slice(0, defaultedOptions.maxRelated)
              .map((related) => files[related.filename]);
            // Set related info in the file's metadata
            if (!files[filename].related) {
              files[filename].related = {};
            }
            files[filename].related[collection] = relatedFiles;
          });
      });
    done(null, files, metalsmith);
  };
};
// # sourceMappingURL=index.js.map
