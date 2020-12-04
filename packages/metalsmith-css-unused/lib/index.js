'use strict';

const deepmerge = require('deepmerge');
const minimatch = require('minimatch');
const { PurgeCSS } = require('purgecss');

module.exports = (options) => {
  options = deepmerge({
    html: '**/*.html',
    css: '**/*.css',
    purgecss: {},
  }, options || {});

  return (files, metalsmith, done) => {
    // Build list of HTML content
    options.purgecss.content = Object.keys(files)
      .filter(minimatch.filter(options.html))
      .map((filename) => ({
        raw: files[filename].contents.toString(),
        extension: 'html',
      }));

    // Build string of CSS content
    const cssFiles = Object.keys(files)
      .filter(minimatch.filter(options.css));
    cssFiles.push(...cssFiles);
    options.purgecss.css = cssFiles
      .map((filename) => ({
        raw: files[filename].contents.toString(),
      }));

    (new PurgeCSS().purge(options.purgecss))
      .then((purgecss) => {
        for (let i = 0; i < purgecss.length; i += 1) {
          files[cssFiles[i]].contents = Buffer.from(purgecss[i].css);
        }

        done();
      });
  };
};
