'use strict';

const http = require('http');
const https = require('https');
const os = require('os');
const path = require('path');

const async = require('async');
const cheerio = require('cheerio');
const deepmerge = require('deepmerge');
const minimatch = require('minimatch');
const userAgents = require('top-user-agents');

/**
 * Return a fake user agent.
 * @returns {string}
 */
const userAgent = userAgents[0];

/**
 * A lenient WHATWG version of url.parse().
 * @param {String} input
 * @returns {{}|URL}
 */
const urlParse = (input) => {
  try {
    return new URL(input);
  } catch (err) {
    return {};
  }
};

/**
 * An object of a link in filename.
 * @typedef {{filename: string, link: string}} filenameAndLink
 */

/**
 * An object of a link in a filename, with a validation result.
 * @typedef {{filename: string, link: string, result: ?string}} filenameAndLinkWithResult
 */

/**
 * Gather all links from all HTML files.
 * @param {Object} files
 * @param {Object} options
 * @returns {Array.<filenameAndLink>}
 */
const htmlLinks = (files, options) => Object.keys(files)
  // For each HTML file that matches the given pattern
  .filter(minimatch.filter(options.html.pattern))
  .reduce((arr, filename) => {
    const file = files[filename];
    const $ = cheerio.load(file.contents);

    const normalizedFilename = filename.replace(/[/\\]/g, '/');
    return arr.concat(
      // For each given tag
      ...Object.keys(options.html.tags)
        .map((tag) => {
          let attributes = options.html.tags[tag];
          if (!Array.isArray(attributes)) {
            attributes = [attributes];
          }

          return [].concat(
            // For each given attribute, get the value of it
            ...attributes
              .map((attribute) => $(`${tag}[${attribute}][${attribute}!='']`)
                .map((i, elem) => $(elem).attr(attribute))
                .get()),
          ).map((link) => ({ filename: normalizedFilename, link }));
        }),
    );
  }, []);

/**
 * @typedef {function} validator
 * @param {string} link
 * @param {Object} options Plugin options
 * @param {validatorCallback} asyncCallback
 */

/**
 * @callback validatorCallback
 * @param {Object} err
 * @param {?string} validationError
 */

const validUrlCache = {};
/**
 * Validate a remote HTTP or HTTPS URL.
 * @type {validator}
 */
const validUrl = (link, options, callback, method = 'HEAD') => {
  const cacheAndCallback = (err, result) => {
    validUrlCache[link] = result;
    callback(err, result);
  };
  if (link in validUrlCache) {
    callback(null, validUrlCache[link]);
    return;
  }

  const library = (link.substr(0, 5) === 'https' ? https : http);
  library.request(link, {
    method,
    headers: {
      // TODO: something to fix Pixabay
      'User-Agent': options.userAgent,
    },
    timeout: options.timeout,
    rejectUnauthorized: false,
  }, (res) => {
    // Re-attempt HEAD 405s as GETs
    if (res.statusCode === 405 && method !== 'GET') {
      validUrl(link, options, callback, 'GET');
      return;
    }

    // TODO: retry mechanism
    if (!res) {
      cacheAndCallback(null, 'no response');
    } else if (res.statusCode >= 400 && res.statusCode <= 599) {
      cacheAndCallback(null, `HTTP ${res.statusCode}`);
    } else {
      cacheAndCallback(null, null);
    }
  }).on('error', (err) => {
    cacheAndCallback(null, err.message);
  }).end();
};

/**
 * Return if a `dest` link from a `src` file is valid or not.
 * @param {Object} files
 * @param {string} src
 * @param {string} dest
 * @returns {boolean}
 */
const validLocal = (files, src, dest) => {
  // TODO: anchor validation
  // Strip trailing anchor link
  dest = dest.replace(/#[^/\\]*$/, '');

  // Reference to self is always valid
  if (dest === '' || dest === '.' || dest === './') {
    return true;
  }

  const linkPath = path.join(path.dirname(src), dest);
  // Reference to self is always valid
  if (linkPath === '' || linkPath === '.' || linkPath === './') {
    return true;
  }

  return linkPath in files || path.join(linkPath, 'index.html') in files;
};

/**
 * @type {Object.<string, validator>}
 */
const protocolValidators = {
  'http:': validUrl,
  'https:': validUrl,
  // TODO: mailto: validation
  // TODO: tel: validation
  // TODO: sms: validation
};

/**
 * Plugin entrypoint.
 * @param {Object} options
 * @returns {function(Object.<string, Object>, Object, function)}
 */
module.exports = (options) => {
  options = deepmerge({
    html: {
      pattern: '**/*.html',
      tags: {
        a: 'href',
        img: ['src', 'data-src'],
        link: 'href',
        script: 'src',
      },
    },
    ignore: [],
    timeout: 15 * 1000,
    userAgent,
    parallelism: os.cpus().length * 4,
  }, options || {});

  return (files, metalsmith, done) => {
    const normalizedFilenames = Object.keys(files)
      .reduce((reducer, filename) => {
        reducer[filename.replace(/[/\\]/g, '/')] = true;
        return reducer;
      }, {});

    // Gather a list of filename + link combinations, and remove ignored links
    options.ignore = options.ignore.map((pattern) => new RegExp(pattern));
    const filenamesAndLinks = [
      ...htmlLinks(files, options),
      // TODO: CSS files
      // TODO: manifest files
    ]
      .filter((v1, idx, arr) => {
        // Filter this out if this a duplicate of an item earlier in the array
        const comparator = (v2) => JSON.stringify(v1) === JSON.stringify(v2);
        return arr.findIndex(comparator) === idx;
      })
      .filter((filenameAndLink) => {
        // Filter this out if any ignore regex matches
        const comparator = (re) => re.test(filenameAndLink.link);
        return !options.ignore.some(comparator);
      });

    // For each link, find the files it is broken for
    async.mapLimit(filenamesAndLinks, options.parallelism, (filenameAndLink, callback) => {
      const callbackResult = (err, result) => callback(err, { ...filenameAndLink, result });
      const { filename, link } = filenameAndLink;

      // Validate links with a protocol (remote links)
      const linkUrl = urlParse(link);
      if (linkUrl.protocol) {
        if (protocolValidators[linkUrl.protocol] !== undefined) {
          const result = protocolValidators[linkUrl.protocol](link, options, callbackResult);
          if (result === undefined) {
            // Validation function didn't return anything, it will call the callback for us
            return;
          }
          // Otherwise, call the callback with the validation result
          callbackResult(null, result);
          return;
        }

        // Assume all unknown protocols are valid
        callbackResult(null, null);
        return;
      }

      // Validate local files
      callbackResult(null, validLocal(normalizedFilenames, filename, link) ? null : 'not found');
    }, (err, /** @type {filenameAndLinkWithResult} */ result) => {
      if (err) {
        done(err);
        return;
      }

      const filenamesToLinkErrors = result
        .filter((filenameAndLink) => filenameAndLink.result)
        .reduce((obj, filenameAndLink) => {
          if (!obj[filenameAndLink.filename]) {
            obj[filenameAndLink.filename] = [];
          }
          obj[filenameAndLink.filename].push(`${filenameAndLink.link} (${filenameAndLink.result})`);
          return obj;
        }, {});

      // Return a pretty formatted error if there are bad links
      if (Object.keys(filenamesToLinkErrors).length) {
        const message = Object.keys(filenamesToLinkErrors).sort()
          .map((filename) => {
            const output = filenamesToLinkErrors[filename].sort()
              .map((linkError) => `  ${linkError}`)
              .join('\n');
            return `${filename}:\n${output}`;
          })
          .join('\n\n');
        done(`Broken links found:\n\n${message}`);
      }

      done();
    });
  };
};
