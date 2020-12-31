'use strict';

const http = require('http');
const https = require('https');
const os = require('os');
const path = require('path');
const url = require('url');

const async = require('async');
const cheerio = require('cheerio');
const deepmerge = require('deepmerge');
const minimatch = require('minimatch');
const userAgents = require('top-user-agents');

/**
 * Flip an object of arrays so the array values become the keys.
 * @param {Object} input
 * @returns {Object}
 */
const flipObjectOfArrays = (input) => {
  const output = {};
  Object.keys(input)
    .forEach((key) => {
      input[key]
        .forEach((val) => {
          if (output[val] === undefined) {
            output[val] = [];
          }
          output[val].push(key);
        });
    });
  return output;
};

/**
 * Return a fake user agent.
 * @returns {string}
 */
const userAgent = () => userAgents[0];

/**
 * Gather all links from all HTML files.
 * @param {Object} files
 * @param {Object} options
 * @returns {Object}
 */
const htmlLinks = (files, options) => Object.keys(files)
  // For each HTML file that matches the given pattern
  .filter(minimatch.filter(options.html.pattern))
  .reduce((obj, filename) => {
    const file = files[filename];
    const $ = cheerio.load(file.contents);

    const normalizedFilename = filename.replace(/[/\\]/g, '/');
    obj[normalizedFilename] = [].concat(
      // For each given tag
      ...Object.keys(options.html.tags)
        .map((tag) => {
          let attributes = options.html.tags[tag];
          if (!Array.isArray(attributes)) {
            attributes = [attributes];
          }

          return [].concat(
            // For each given attribute, get the value of it
            ...attributes.map((attribute) => $(`${tag}[${attribute}][${attribute}!='']`)
              .map((i, elem) => $(elem).attr(attribute))
              .get()),
          );
        }),
    );
    return obj;
  }, {});

/**
 * Call a callback with if `link` is a valid URL or not.
 * @param {string} link
 * @param {Object} options Plugin options
 * @param {function} asyncCallback
 * @param {string} method
 */
const validUrl = (link, options, asyncCallback, method = 'HEAD') => {
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
      validUrl(link, options, asyncCallback, 'GET');
      return;
    }

    asyncCallback(null, res && !(res.statusCode >= 400 && res.statusCode <= 599));
  }).on('error', () => {
    asyncCallback(null, false);
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

  return linkPath in files || `${linkPath}/index.html` in files;
};

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
 * @returns {function}
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
    userAgent: userAgent(),
    parallelism: os.cpus().length * 4,
  }, options || {});

  return (files, metalsmith, done) => {
    const normalizedFilenames = Object.keys(files)
      .reduce((reducer, filename) => {
        reducer[filename.replace(/[/\\]/g, '/')] = true;
        return reducer;
      }, {});

    // Gather the links contained in all files, and then invert the array to reduce items to check
    const filenamesToLinks = {
      ...htmlLinks(files, options),
      // TODO: CSS files
      // TODO: manifest files
    };
    const linksToFilenames = flipObjectOfArrays(filenamesToLinks);

    // Process ignored links
    options.ignore = options.ignore.map((pattern) => new RegExp(pattern));
    Object.keys(linksToFilenames)
      .filter((link) => options.ignore.some((re) => re.test(link)))
      .forEach((link) => delete linksToFilenames[link]);

    // For each link, find the files it is broken for
    async.mapValuesLimit(linksToFilenames, options.parallelism, (filenames, link, callback) => {
      // Validate links with a protocol
      const linkUrl = url.parse(link);
      if (linkUrl.protocol) {
        if (protocolValidators[linkUrl.protocol] !== undefined) {
          const validatorCallback = (err, valid) => callback(err, valid ? [] : filenames);
          const valid = protocolValidators[linkUrl.protocol](link, options, validatorCallback);
          if (typeof valid !== 'boolean') {
            // Invalid boolean means the function will call the callback for us
            return;
          }
          callback(null, valid ? [] : filenames);
          return;
        }

        // Assume all unknown protocols are valid
        callback(null, []);
        return;
      }

      // Validate local files
      const badFilenames = filenames
        .filter((filename) => !validLocal(normalizedFilenames, filename, link));
      callback(null, badFilenames);
    }, (err, result) => {
      if (err) {
        done(err);
        return;
      }

      // Return a pretty formatted error if there are bad links
      result = flipObjectOfArrays(result);
      if (Object.keys(result).length) {
        const message = Object.keys(result).sort()
          .map((filename) => {
            const output = result[filename].sort()
              .map((link) => `  ${link}`)
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
