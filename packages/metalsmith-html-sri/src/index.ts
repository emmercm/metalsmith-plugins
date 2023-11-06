import cheerio from 'cheerio';
import crypto from 'crypto';
import deepmerge from 'deepmerge';
import path from 'path';
import request from 'sync-request';
import url from 'url';
import Metalsmith from "metalsmith";

interface Options {
  html?: string,
  tags?: {[key: string]: {attribute: string, selector: string}},
  ignoreResources?: string[],
  algorithm?: string | string[],
}

export default (options: Options = {}): Metalsmith.Plugin => {
  const defaultedOptions = deepmerge({
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
  } satisfies Options, options || {});
  if (!Array.isArray(defaultedOptions.algorithm)) {
    defaultedOptions.algorithm = [defaultedOptions.algorithm];
  }

  const remoteResources: {[key: string]: string} = {};

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-html-sri');
    debug('running with options: %O', defaultedOptions);

    // For each HTML file that matches the given pattern
    metalsmith.match(defaultedOptions.html, Object.keys(files))
      .forEach((filename) => {
        debug('processing file: %s', filename);

        const file = files[filename];
        const normalizedFilename = filename.replace(/[/\\]/g, path.sep);

        // For each given tag
        const $ = cheerio.load(file.contents);
        Object.keys(defaultedOptions.tags)
          .forEach((tag) => {
            const { attribute } = defaultedOptions.tags[tag];

            let $elems = $(`${tag}[${attribute}][${attribute}!=""]`);
            if (Object.prototype.hasOwnProperty.call(defaultedOptions.tags[tag], 'selector')) {
              $elems = $elems.filter(defaultedOptions.tags[tag].selector);
            }

            // For each matching element for the tag in the file
            $elems.each((i, elem) => {
              const uri = $(elem).attr(attribute);
              if (!uri) {
                return;
              }

              // Skip ignored resources
              const ignore = defaultedOptions.ignoreResources.some((ignoreResource) => {
                const re = new RegExp(ignoreResource);
                return re.test(uri);
              });
              if (ignore) {
                return;
              }

              // Look for local resource without leading slash
              let resource = uri.replace(/^\//, '');

              if (!(resource in files)) {
                // Look for local resource relative to current file
                resource = path.join(path.dirname(normalizedFilename), uri);
              }

              if (resource in files) {
                // Add/overwrite integrity attribute of local resources

                // Only calculate resource hash once
                if (typeof files[resource].integrity === 'undefined') {
                  // https://www.w3.org/TR/2016/REC-SRI-20160623/#the-integrity-attribute
                  files[resource].integrity = (defaultedOptions.algorithm as string[])
                    .map((algorithm: any) => `${algorithm}-${crypto.createHash(algorithm).update(files[resource].contents).digest('base64')}`)
                    .join(' ');
                }

                debug('  %s: %s', resource, files[resource].integrity);
                $(elem).attr('integrity', files[resource].integrity);
              } else {
                // Add integrity attribute to remote resources

                // Skip bad URLs
                const parsedUri = url.parse(uri);
                if (!parsedUri.protocol) {
                  return;
                }

                // Don't overwrite existing integrity attributes
                if ($(elem).is('[integrity][integrity!=""]')) {
                  return;
                }

                // Only calculate resource hash once
                if (!Object.prototype.hasOwnProperty.call(remoteResources, uri)) {
                  debug('fetching file: %s', uri);
                  const response = request('GET', uri);
                  remoteResources[uri] = (defaultedOptions.algorithm as string[])
                    .map((algorithm: any) => `${algorithm}-${crypto.createHash(algorithm).update(response.body).digest('base64')}`)
                    .join(' ');
                }

                debug('  %s: %s', uri, remoteResources[uri]);
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

    done(null, files, metalsmith);
  };
};
