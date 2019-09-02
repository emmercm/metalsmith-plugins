const cheerio = require('cheerio');
const crypto = require('crypto');
const deepmerge = require('deepmerge');
const minimatch = require('minimatch');
const path = require('path');
const request = require('sync-request');
const url = require('url');

module.exports = (options) => {
  options = deepmerge({
    html: '**/*.html',
    tags: {
      // https://www.w3.org/TR/2016/REC-SRI-20160623/#the-link-element-for-stylesheets
      link: {
        attribute: 'href',
        selector: '[rel="stylesheet"]',
      },
      // https://www.w3.org/TR/2016/REC-SRI-20160623/#the-script-element
      // https://github.com/whatwg/html/issues/2382
      script: {
        attribute: 'src',
        selector: ':not([type]), [type!="module"]',
      },
    },
    // https://www.w3.org/TR/2016/REC-SRI-20160623/#hash-collision-attacks
    algorithm: 'sha384',
  }, options || {});
  if (!Array.isArray(options.algorithm)) {
    options.algorithm = [options.algorithm];
  }

  const remoteSubresources = {};

  return (files, metalsmith, done) => {
    // For each HTML file that matches the given pattern
    Object.keys(files)
      .filter(minimatch.filter(options.html))
      .forEach((filename) => {
        const file = files[filename];

        // For each given tag
        const $ = cheerio.load(file.contents);
        Object.keys(options.tags)
          .forEach((tag) => {
            const { attribute } = options.tags[tag];

            let $elems = $(`${tag}[${attribute}][${attribute}!=""]`);
            if (Object.prototype.hasOwnProperty.call(options.tags[tag], 'selector')) {
              $elems = $elems.filter(options.tags[tag].selector);
            }

            // For each matching element for the tag in the file
            $elems.each((i, elem) => {
              const uri = $(elem).attr(attribute);
              const subresource = path.join(path.dirname(filename), uri);

              if (subresource in files) {
                // Add/overwrite integrity attribute of local subresources
                // Only calculate file hash once
                if (typeof files[subresource].integrity === 'undefined') {
                  // https://www.w3.org/TR/2016/REC-SRI-20160623/#the-integrity-attribute
                  files[subresource].integrity = options.algorithm
                    .map((algorithm) => `${algorithm}-${crypto.createHash(algorithm).update(files[subresource].contents).digest('base64')}`)
                    .join(' ');
                }

                $(elem).attr('integrity', files[subresource].integrity);
              } else {
                // https://github.com/google/fonts/issues/473
                if (uri.indexOf('fonts.googleapis.com') !== -1) {
                  return;
                }

                // Skip bad URLs
                const parsedUri = url.parse(uri);
                if (!parsedUri.protocol) {
                  return;
                }

                // Add integrity attribute to remote subresources
                if ($(elem).not('[integrity][integrity!=""]')) {
                  // Only calculate file hash once
                  if (!Object.prototype.hasOwnProperty.call(remoteSubresources, uri)) {
                    const response = request('GET', uri);
                    remoteSubresources[uri] = options.algorithm
                      .map((algorithm) => `${algorithm}-${crypto.createHash(algorithm).update(response.body).digest('base64')}`)
                      .join(' ');
                  }

                  $(elem).attr('integrity', remoteSubresources[uri]);
                }

                // Enforce crossorigin attribute for non-local subresources with integrity attribute
                //  https://www.w3.org/TR/2016/REC-SRI-20160623/#cross-origin-data-leakage
                if ($(elem).is('[integrity][integrity!=""]')
                  && $(elem).is('[crossorigin][crossorigin=""], :not([crossorigin])')
                ) {
                  $(elem).attr('crossorigin', 'anonymous');
                }
              }
            });
          });

        file.contents = Buffer.from($.html());
      });

    done();
  };
};
