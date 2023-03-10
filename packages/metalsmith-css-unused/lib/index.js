'use strict';

const deepmerge = require('deepmerge');
const { PurgeCSS } = require('purgecss');

module.exports = (options = {}) => {
  const defaultedOptions = deepmerge({
    html: '**/*.html',
    css: '**/*.css',
    purgecss: {},
  }, options || {});

  return (files, metalsmith, done) => {
    // Build list of HTML content
    defaultedOptions.purgecss.content = metalsmith.match(defaultedOptions.html, Object.keys(files))
      .map((filename) => ({
        raw: files[filename].contents.toString(),
        extension: 'html',
      }));

    // Build list of CSS content
    const cssFiles = metalsmith.match(defaultedOptions.css, Object.keys(files));
    defaultedOptions.purgecss.css = cssFiles
      .map((filename) => ({
        raw: files[filename].contents.toString(),
      }));

    (new PurgeCSS().purge(defaultedOptions.purgecss))
      .then((purgecss) => {
        for (let i = 0; i < purgecss.length; i += 1) {
          files[cssFiles[i]].contents = Buffer.from(purgecss[i].css);
        }

        done();
      });
  };
};
