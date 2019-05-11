const deepmerge = require('deepmerge');
const minimatch = require('minimatch');
const path = require('path');
const uncss = require('uncss');

module.exports = options => {
  options = deepmerge({
    html: '**/*.html',
    css: '**/*.css',
    output: 'uncss.css',
    uncss: {
      raw: [],
      stylesheets: [path.join(__dirname, 'dummy.css')]
    }
  }, options || {});

  return (files, metalsmith, done) => {
    // Build list of HTML content
    const htmlFiles = Object.keys(files)
      .filter(minimatch.filter(options.html))
      .map(filename => filename);
    const htmlContent = htmlFiles.map(filename => files[filename].contents.toString());

    // Build string of CSS content
    const cssFiles = Object.keys(files)
      .filter(minimatch.filter(options.css))
      .map(filename => filename);
    options.uncss.raw = cssFiles
      .map(filename => files[filename].contents.toString())
      .join('\n\n');

    uncss(htmlContent, options.uncss, (err, output) => {
      if(err) {
        throw err;
      }

      // Remove CSS files
      htmlFiles.forEach(filename => {
        delete files[filename];
      });

      // Create CSS file
      files[options.output] = {
        contents: Buffer.from(output)
      };

      done();
    });
  };
};
