'use strict';

const deepmerge = require('deepmerge');
const readingTime = require('reading-time');

module.exports = (options) => {
  options = deepmerge({
    pattern: '**/*',
    stripHtml: true,
    replacements: [],
    readingTime: {},
  }, options || {});

  return (files, metalsmith, done) => {
    // For each file that matches the given pattern
    metalsmith.match(options.pattern, Object.keys(files))
      .forEach((filename) => {
        let contents = files[filename].contents.toString();

        if (options.stripHtml) {
          contents = contents
            // XML
            .replace(/<\?xml[^>]+\?>/gs, ' ') // namespaces
            .replace(/<!--.*?-->/gs, ' ') // comments
            // HTML
            .replace(/<[a-zA-Z0-9]+[^>]*>/gs, ' ') // start tag
            .replace(/<\/[a-zA-Z0-9]+>/gs, ' ') // end tag
            .trim();
        }

        if (options.replacements && options.replacements.length) {
          options.replacements.forEach((replacement) => {
            let pattern = replacement[0];
            const matches = pattern.match(/^\/(.+)\/([a-z]*)/);
            if (matches) {
              pattern = new RegExp(matches[1], matches[2]);
            }

            contents = contents.replace(pattern, replacement[1]);
          });
        }

        files[filename].readingTime = readingTime(contents, options.readingTime).text;
      });

    done();
  };
};
