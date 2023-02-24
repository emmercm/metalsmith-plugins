'use strict';

const deepmerge = require('deepmerge');
const readingTime = require('reading-time');

module.exports = (options = {}) => {
  const defaultedOptions = deepmerge({
    pattern: '**/*',
    stripHtml: true,
    replacements: [],
    readingTime: {},
  }, options || {});

  return (files, metalsmith, done) => {
    // For each file that matches the given pattern
    metalsmith.match(defaultedOptions.pattern, Object.keys(files))
      .forEach((filename) => {
        let contents = files[filename].contents.toString();

        if (defaultedOptions.stripHtml) {
          contents = contents
            // XML
            .replace(/<\?xml[^>]+\?>/gs, ' ') // namespaces
            .replace(/<!--.*?-->/gs, ' ') // comments
            // HTML
            .replace(/<[a-zA-Z0-9]+[^>]*>/gs, ' ') // start tag
            .replace(/<\/[a-zA-Z0-9]+>/gs, ' ') // end tag
            .trim();
        }

        if (defaultedOptions.replacements && defaultedOptions.replacements.length) {
          defaultedOptions.replacements.forEach((replacement) => {
            let pattern = replacement[0];
            const matches = pattern.match(/^\/(.+)\/([a-z]*)/);
            if (matches) {
              pattern = new RegExp(matches[1], matches[2]);
            }

            contents = contents.replace(pattern, replacement[1]);
          });
        }

        files[filename].readingTime = readingTime(contents, defaultedOptions.readingTime).text;
      });

    done();
  };
};
