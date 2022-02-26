'use strict';

const deepmerge = require('deepmerge');
const { PurgeCSS } = require('purgecss');

module.exports = (options) => {
  options = deepmerge({
    html: '**/*.html',
    css: '**/*.css',
    purgecss: {},
  }, options || {});

  return (files, metalsmith, done) => {
    // Build list of HTML content
    options.purgecss.content = metalsmith.match(options.html)
      .map((filename) => ({
        raw: files[filename].contents.toString(),
        extension: 'html',
      }));

    // Build list of CSS content
    const cssFiles = metalsmith.match(options.css);
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
