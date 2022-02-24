'use strict';

const deepmerge = require('deepmerge');
const readingTime = require('reading-time');

module.exports = (options) => {
  options = deepmerge({
    pattern: '**/*',
    readingTime: {},
  }, options || {});

  return (files, metalsmith, done) => {
    // For each file that matches the given pattern
    metalsmith.match(options.pattern)
      .forEach((filename) => {
        const contents = files[filename].contents.toString();
        files[filename].readingTime = readingTime(contents, options.readingTime).text;
      });

    done();
  };
};
