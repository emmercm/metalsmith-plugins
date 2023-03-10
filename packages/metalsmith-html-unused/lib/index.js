'use strict';

const path = require('path');

const cheerio = require('cheerio');
const deepmerge = require('deepmerge');

module.exports = (options = {}) => {
  const defaultedOptions = deepmerge({
    pattern: '',
    ignore: '',
    html: '**/*.html',
    attributes: [
      'href', // <a>, <link>
      'src', // <img>, <script>
      'data-src', // <img>
      'content', // <meta>
    ],
  }, options || {}, { arrayMerge: (destinationArray, sourceArray) => sourceArray });

  return (files, metalsmith, done) => {
    const resources = [].concat(
      // For each HTML file that matches the given pattern
      ...metalsmith.match(defaultedOptions.html, Object.keys(files))
        .map((filename) => {
          const file = files[filename];

          const $ = cheerio.load(file.contents);
          return [].concat(
            // For each given attribute
            ...defaultedOptions.attributes
              .map((attribute) => {
                // For each matching element for the tag in the file
                const selector = `[${attribute}!=""]`;
                return [
                  // Directly referenced resources
                  ...$(selector)
                    .map((i, elem) => path.join(path.dirname(filename), $(elem).attr(attribute)))
                    .get()
                    .filter((resource) => resource in files),

                  // Manifest-referenced resources
                  ...[].concat(
                    ...$(`${selector}[rel="manifest"]`)
                      .map((i, elem) => path.join(path.dirname(filename), $(elem).attr(attribute)))
                      .get()
                      .filter((resource) => resource in files)
                      .map((resource) => {
                        const contents = JSON.parse(files[resource].contents);
                        if (Object.prototype.hasOwnProperty.call(contents, 'icons')) {
                          return contents.icons
                            .filter((icon) => Object.prototype.hasOwnProperty.call(icon, 'src'))
                            .map((icon) => {
                              // Get rid of leading slash
                              const relative = icon.src.replace(/^\//, '');

                              // Ignore icons that already resolve successfully
                              if (relative in files) {
                                return relative;
                              }

                              // Resolve relative paths
                              return path.join(path.dirname(resource), icon.src);
                            });
                        }
                        return [];
                      }),
                  ),
                ];
              }),
          );
        }),
    )
      // Map to a consistent path separator
      .map((filename) => filename.replace(/[/\\]/g, '/'))
      // Get rid of duplicates
      .filter((x, i, a) => a.indexOf(x) === i);

    // For each file that matches the given pattern
    const ignoredFilenames = defaultedOptions.ignore
      ? metalsmith.match(defaultedOptions.ignore, Object.keys(files)) : [];
    const consideredFilenames = defaultedOptions.pattern
      ? metalsmith.match(defaultedOptions.pattern, Object.keys(files)) : [];
    consideredFilenames
      // Filter "ignore"
      .filter((filename) => ignoredFilenames.indexOf(filename) === -1)
      .forEach((filename) => {
        // Map to a consistent path separator
        const normalizedFilename = filename.replace(/[/\\]/g, '/');
        // Remove the file if it's unused
        if (resources.indexOf(normalizedFilename) === -1) {
          delete files[filename];
        }
      });

    done();
  };
};
