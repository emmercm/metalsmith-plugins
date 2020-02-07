'use strict';

const cheerio = require('cheerio');
const deepmerge = require('deepmerge');
const minimatch = require('minimatch');
const needles = require('needle-string');
const path = require('path');
const url = require('url');

module.exports = (options) => {
  options = deepmerge({
    html: '**/*.html',
    tags: {
      a: 'href',
      img: ['src', 'data-src'],
      link: 'href',
      script: 'src',
      form: 'action',
    },
  }, options || {});

  const pathslash = process.platform === 'win32' ? '\\' : '/';

  return (files, metalsmith, done) => {
    // For each HTML file that matches the given pattern
    Object.keys(files)
      .filter(minimatch.filter(options.html))
      .forEach((filename) => {
        const file = files[filename];
        const $ = cheerio.load(file.contents);

        // Find file's path relative to source root
        let rootPath = '';
        for (let i = 0; i < needles(filename, pathslash); i += 1) {
          rootPath += '../';
        }
        file.rootPath = rootPath;

        // For each given tag
        Object.keys(options.tags)
          .forEach((tag) => {
            let attributes = options.tags[tag];
            if (!Array.isArray(attributes)) {
              attributes = [attributes];
            }

            attributes.forEach((attribute) => {
              const selector = `${tag}[${attribute}][${attribute}!='']`;

              // For each matching element for the tag in the file
              $(selector).each((i, elem) => {
                const resource = $(elem).attr(attribute);

                // Ignore non-local resources
                const resourceURL = url.parse(resource);
                if (resourceURL.protocol) {
                  return;
                }

                // Ignore anchor links
                if (resource.startsWith('#')) {
                  return;
                }

                // Get rid of leading slash
                const relative = resource.replace(/^\//, '');
                $(elem).attr(attribute, relative);

                // Ignore relative links that already resolve successfully
                if (relative.startsWith(file.rootPath)) {
                  const re = new RegExp(`^${file.rootPath}`);
                  if (relative.replace(re, '') in files) {
                    return;
                  }
                }

                // Change to a relative link
                const joined = path.join(file.rootPath, relative);
                $(elem).attr(attribute, joined);
              });
            });
          });

        file.contents = Buffer.from($.html());
      });

    done();
  };
};
