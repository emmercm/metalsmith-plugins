'use strict';

const cheerio = require('cheerio');
const deepmerge = require('deepmerge');
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

  return (files, metalsmith, done) => {
    // For each HTML file that matches the given pattern
    metalsmith.match(options.html)
      .forEach((filename) => {
        const file = files[filename];
        const normalizedFilename = filename.replace(/[/\\]/g, path.sep);
        const $ = cheerio.load(file.contents);

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

                // Find the absolute path of the resource
                let absoluteResource = resource;
                if (!resource.startsWith('/')) {
                  absoluteResource = path.join(path.dirname(normalizedFilename), resource)
                    .normalize();
                }
                absoluteResource = absoluteResource.replace(/^[/\\]+/, '');

                // Find the relative path of the resource
                const relativeResource = path.relative(path.dirname(normalizedFilename), absoluteResource).replace(/[/\\]/g, '/') || '.';

                $(elem).attr(attribute, relativeResource);
              });
            });
          });

        file.contents = Buffer.from($.html());
      });

    done();
  };
};
