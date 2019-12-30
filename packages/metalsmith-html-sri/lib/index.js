'use strict';

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
    ignoreResources: [],
    // https://www.w3.org/TR/2016/REC-SRI-20160623/#hash-collision-attacks
    algorithm: 'sha384',
  }, options || {});
  if (!Array.isArray(options.algorithm)) {
    options.algorithm = [options.algorithm];
  }

  const remoteResources = {};

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

              // Skip ignored resources
              const ignore = options.ignoreResources.some((ignoreResource) => {
                const re = new RegExp(ignoreResource);
                return re.test(uri);
              });
              if (ignore) {
                return;
              }

              const resource = path.join(path.dirname(filename), uri);
              if (resource in files) {
                // Add/overwrite integrity attribute of local resources

                // Only calculate resource hash once
                if (typeof files[resource].integrity === 'undefined') {
                  // https://www.w3.org/TR/2016/REC-SRI-20160623/#the-integrity-attribute
                  files[resource].integrity = options.algorithm
                    .map((algorithm) => `${algorithm}-${crypto.createHash(algorithm).update(files[resource].contents).digest('base64')}`)
                    .join(' ');
                }

                $(elem).attr('integrity', files[resource].integrity);
              } else {
                // Add integrity attribute to remote resources

                // Skip bad URLs
                const parsedUri = url.parse(uri);
                if (!parsedUri.protocol) {
                  return;
                }

                // Don't overwrite valid integrity attributes
                if ($(elem).is('[integrity][integrity!=""]')) {
                  return;
                }

                // Only calculate resource hash once
                if (!Object.prototype.hasOwnProperty.call(remoteResources, uri)) {
                  const response = request('GET', uri);
                  remoteResources[uri] = options.algorithm
                    .map((algorithm) => `${algorithm}-${crypto.createHash(algorithm).update(response.body).digest('base64')}`)
                    .join(' ');
                }

                $(elem).attr('integrity', remoteResources[uri]);

                // Enforce crossorigin attribute for non-local resources with integrity attribute
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
