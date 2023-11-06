import deepmerge from 'deepmerge';
import * as htmlEscaper from 'html-escaper';
import natural from 'natural';
import sanitizeHtml from 'sanitize-html';

import Metalsmith from 'metalsmith';

const { TfIdf } = natural;

interface Options {
    pattern?: string,
    maxRelated?: number,
    natural?: {
        minTfIdf?: number,
        maxTerms?: number,
    },
    sanitizeHtml?: sanitizeHtml.IOptions,
}

interface DefaultedOptions extends Options {
    pattern: string,
    natural: {
        minTfIdf: number,
        maxTerms: number
    }
}

export default (options: Options = {}): Metalsmith.Plugin => {
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
  } satisfies DefaultedOptions, options || {});

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-collections-related');
    debug('running with options: %O', defaultedOptions);

    // Filter files to be considered
    const keywordFiles = metalsmith.match(defaultedOptions.pattern, Object.keys(files))
      .filter((filename) => files[filename].collection);
    debug('processing files: %O', keywordFiles);

    // Create a map of collection->files
    const collections: {[key: string]: string[]} = {};
    keywordFiles
      .forEach((filename) => {
          const fileCollections = (files[filename].collection ?? []) as string[];
          fileCollections
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
        debug('processing collection: %s', collection);

        const collectionFiles = collections[collection];

        // For each file in the collection
        collectionFiles
          .forEach((filename: any) => {
            const tfidf = new TfIdf();

            // Gather filenames in order
            const documentFilenames = [filename, ...collectionFiles
              .filter((relatedFilename: any) => relatedFilename !== filename)];

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
              .filter((term) => term.tfidf >= (defaultedOptions.natural.minTfIdf ?? 0))
              .map((term) => term.term)
              .slice(0, defaultedOptions.natural.maxTerms);

            // Find related files
            let relatedFiles: any[] = [];
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
