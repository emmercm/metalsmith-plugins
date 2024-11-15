import async from 'async';
import * as cheerio from 'cheerio';
import crypto from 'crypto';
import deepmerge from 'deepmerge';
import https from 'https';
import Metalsmith from 'metalsmith';
import os from 'os';
import path from 'path';
import url, { URL } from 'url';

export interface Options {
  html?: string;
  tags?: { [key: string]: { attribute: string; selector: string } };
  ignoreResources?: string[];
  algorithm?: string | string[];
  parallelism?: number;
}

async function get(uri: string | URL, timeout = 10_000): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    https
      .get(uri, { timeout }, (res) => {
        if (
          res.statusCode !== undefined &&
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          // Handle redirects
          res.destroy();
          return get(res.headers.location);
        }

        if (res.statusCode !== undefined && (res.statusCode < 200 || res.statusCode >= 300)) {
          // Handle HTTP errors
          return reject(new Error('statusCode=' + res.statusCode));
        }

        const chunks: Uint8Array[] = [];
        res.on('data', (chunk) => {
          chunks.push(chunk);
        });
        res.on('end', () => {
          resolve(Buffer.concat(chunks));
        });
      })
      .on('error', reject)
      .on('timeout', reject);
  });
}

export default (options: Options = {}): Metalsmith.Plugin => {
  const defaultedOptions = deepmerge(
    {
      html: '**/*.html',
      parallelism: os.cpus().length,
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
    } satisfies Options,
    options || {},
  );
  if (!Array.isArray(defaultedOptions.algorithm)) {
    defaultedOptions.algorithm = [defaultedOptions.algorithm];
  }

  const remoteResources: { [key: string]: string } = {};

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-html-sri');
    debug('running with options: %O', defaultedOptions);

    // For each HTML file that matches the given pattern
    const htmlFiles = metalsmith.match(defaultedOptions.html, Object.keys(files));
    async.eachLimit(
      htmlFiles,
      defaultedOptions.parallelism ?? 1,
      async.asyncify(async (filename: string) => {
        debug('processing file: %s', filename);

        const file = files[filename];
        const normalizedFilename = filename.replace(/[/\\]/g, path.sep);

        // For each given tag
        const $ = cheerio.load(file.contents);
        for (const tag of Object.keys(defaultedOptions.tags)) {
          const { attribute } = defaultedOptions.tags[tag];

          let $elems = $(`${tag}[${attribute}][${attribute}!=""]`);
          if (Object.prototype.hasOwnProperty.call(defaultedOptions.tags[tag], 'selector')) {
            $elems = $elems.filter(defaultedOptions.tags[tag].selector);
          }

          // For each matching element for the tag in the file
          let elemPromise = Promise.resolve();
          $elems.each((i, elem) => {
            elemPromise = elemPromise.then(async () => {
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
                    .map(
                      (algorithm) =>
                        `${algorithm}-${crypto.createHash(algorithm).update(files[resource].contents).digest('base64')}`,
                    )
                    .join(' ');
                }

                debug('  %s: %s', resource, files[resource].integrity);
                $(elem).attr('integrity', files[resource].integrity as string);
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

                  const response = await get(uri);
                  remoteResources[uri] = (defaultedOptions.algorithm as string[])
                    .map(
                      (algorithm) =>
                        `${algorithm}-${crypto.createHash(algorithm).update(response).digest('base64')}`,
                    )
                    .join(' ');
                }

                debug('  %s: %s', uri, remoteResources[uri]);
                $(elem).attr('integrity', remoteResources[uri]);

                // Enforce crossorigin attribute for non-local resources with integrity attribute
                //  https://www.w3.org/TR/2016/REC-SRI-20160623/#cross-origin-data-leakage
                if (
                  $(elem).is('[integrity][integrity!=""]') &&
                  $(elem).is('[crossorigin][crossorigin=""], :not([crossorigin])')
                ) {
                  $(elem).attr('crossorigin', 'anonymous');
                }
              }
            });
          });
          await elemPromise;
        }

        file.contents = Buffer.from($.html());
      }),
      (err) => {
        if (err) {
          done(err);
          return;
        }

        done();
      },
    );
  };
};
