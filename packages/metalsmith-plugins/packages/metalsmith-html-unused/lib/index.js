const cheerio = require('cheerio');
const deepmerge = require('deepmerge');
const minimatch = require('minimatch');
const path = require('path');

module.exports = (options) => {
  options = deepmerge({
    html: '**/*.html',
    attributes: [
      'href',
      'src',
    ],
    pattern: '',
  }, options || {});

  return (files, metalsmith, done) => {
    const resources = [].concat(
      // For each HTML file that matches the given pattern
      ...Object.keys(files)
        .filter(minimatch.filter(options.html))
        .map((filename) => {
          const file = files[filename];

          const $ = cheerio.load(file.contents);
          return [].concat(
            // For each given attribute
            ...options.attributes
              .map((attribute) => {
                // For each matching element for the tag in the file
                const selector = `[${attribute}!=""]`;
                return [
                  // Directly referenced resources
                  ...$(selector)
                    .map((i, elem) => path.join(path.dirname(filename), $(elem).attr(attribute)))
                    .get()
                    .filter(resource => resource in files),

                  // Manifest-referenced resources
                  ...[].concat(
                    ...$(`${selector}[rel="manifest"]`)
                      .map((i, elem) => path.join(path.dirname(filename), $(elem).attr(attribute)))
                      .get()
                      .filter(resource => resource in files)
                      .map((resource) => {
                        const contents = JSON.parse(files[resource].contents);
                        if (Object.prototype.hasOwnProperty.call(contents, 'icons')) {
                          return contents.icons
                            .filter(icon => Object.prototype.hasOwnProperty.call(icon, 'src'))
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
    ).filter((x, i, a) => a.indexOf(x) === i);

    // For each file that matches the given pattern
    Object.keys(files)
      .filter(minimatch.filter(options.pattern))
      .forEach((filename) => {
        // Remove the file if it's unused
        if (resources.indexOf(filename) === -1) {
          delete files[filename];
        }
      });

    done();
  };
};
