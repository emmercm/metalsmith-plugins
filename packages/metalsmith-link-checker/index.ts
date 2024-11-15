import async from 'async';
import * as cheerio from 'cheerio';
import deepmerge from 'deepmerge';
import http from 'http';
import https from 'https';
import Metalsmith from 'metalsmith';
import path from 'path';
import userAgents from 'top-user-agents';
import { URL } from 'url';

export interface Options {
  html?: {
    pattern?: string;
    tags?: { [key: string]: string | string[] };
  };
  ignore?: string[] | RegExp[];
  timeout?: number;
  attempts?: number;
  userAgent?: string;
  parallelism?: number;
}

interface FilenameAndLink {
  filename: string;
  link: string;
}

interface FilenameAndLinkWithResult extends FilenameAndLink {
  result?: string;
}

type Validator = (
  link: string,
  options: Options,
  debug: Metalsmith.Debugger,
) => string | undefined | Promise<string | undefined>;

/**
 * Return a fake user agent.
 */
const userAgent = userAgents[0];

/**
 * A lenient WHATWG version of url.parse().
 */
const urlParse = (input: string): URL | undefined => {
  try {
    return new URL(input);
  } catch {
    return undefined;
  }
};

/**
 * Gather all links from all HTML files.
 */
const htmlLinks = (
  metalsmith: Metalsmith,
  files: Metalsmith.Files,
  options: Options,
): FilenameAndLink[] => {
  // For each HTML file that matches the given pattern
  const htmlFiles = metalsmith.match(options.html?.pattern ?? '**/*', Object.keys(files));
  return htmlFiles.reduce((arr, filename) => {
    const file = files[filename];
    const $ = cheerio.load(file.contents);

    const normalizedFilename = filename.replace(/[/\\]/g, '/');
    return arr.concat(
      // For each given tag
      ...Object.keys(options.html?.tags ?? {}).map((tag) => {
        let attributes = (options.html?.tags ?? {})[tag];
        if (!Array.isArray(attributes)) {
          attributes = [attributes];
        }

        return attributes
          .flatMap((attribute) =>
            $(`${tag}[${attribute}][${attribute}!=''][rel!='preconnect']`)
              .map((i, elem) => $(elem).attr(attribute))
              .get(),
          )
          .map((link) => ({ filename: normalizedFilename, link }) satisfies FilenameAndLink);
      }),
    );
  }, [] as FilenameAndLink[]);
};

/**
 * Validate a FaceTime link.
 */
const validFacetime = (link: string) => {
  // https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/FacetimeLinks/FacetimeLinks.html
  if (link === 'facetime:') {
    return undefined;
  }
  if (link.indexOf('@') === -1 && !link.match(/[0-9]/)) {
    return 'invalid';
  }
  if (link.indexOf('@') !== -1) {
    if (!link.match(/^facetime:[^@]+@.+$/)) {
      return 'invalid email address';
    }
  } else {
    if (link.indexOf(' ') !== -1) {
      return 'contains a space';
    }
    if (!link.match(/^facetime:[0-9.+-]+$/)) {
      return 'invalid phone number';
    }
  }
  return undefined;
};

const validUrlCache: { [key: string]: string | undefined } = {};
/**
 * Validate a remote HTTP or HTTPS URL.
 */
const validUrl = async (
  link: string,
  options: Options,
  debug: Metalsmith.Debugger,
  attempt = 1,
  method = 'HEAD',
): Promise<string | undefined> => {
  if (link in validUrlCache) {
    // Already validated
    return validUrlCache[link];
  }

  const result = await new Promise<string | undefined>((resolve) => {
    debug('checking URL with %s: %s, attempt %i', method, link, attempt);
    const library = link.slice(0, 5) === 'https' ? https : http;
    const req = library.request(
      link,
      {
        method,
        headers: {
          // TODO: something to fix Pixabay
          'User-Agent': options.userAgent,
        },
        timeout: options.timeout,
        rejectUnauthorized: false,
      },
      (res) => {
        debug('%s %s (%s)', method, link, res.statusCode);

        if (!res) {
          resolve('no response');
        } else if (res.statusCode && res.statusCode >= 400 && res.statusCode <= 599) {
          resolve(`HTTP ${res.statusCode}`);
        } else {
          resolve(undefined);
        }
      },
    );

    req.on('error', (err) => {
      debug.error('failed to %s URL "%s": %s', method, link, err);
      resolve(err.message);
    });

    req.on('timeout', () => {
      debug.error('failed to %s URL "%s": timeout', method, link);
      req.destroy(); // cause an error
    });

    req.end();
  });

  // Re-attempt HEAD errors as GETs
  if (result && method === 'HEAD') {
    return validUrl(link, options, debug, attempt, 'GET');
  }

  // Retry failures if we haven't reached the retry limit
  if (result && attempt <= (options.attempts ?? 0)) {
    await new Promise((resolve) => {
      setTimeout(resolve, Math.min(1000, 100 * 2 ** attempt));
    });
    return validUrl(link, options, debug, attempt + 1, method);
  }

  // Otherwise, store the result and return
  validUrlCache[link] = result;
  return result;
};

/**
 * Validate a mailto: link.
 */
const validMailto = (link: string) => {
  // https://www.w3docs.com/snippets/html/how-to-create-mailto-links.html
  if (!link.match(/^mailto:[^@]+/)) {
    return 'invalid local-part';
  }
  if (!link.match(/^mailto:[^@]+@[^?]+/)) {
    return 'invalid domain';
  }
  if (
    !link.match(
      /^mailto:[^@]+@[^?]+(\?(subject|cc|bcc|body)=[^&]+(&(subject|cc|bcc|body)=[^&]+)?)?$/,
    )
  ) {
    return 'invalid query params';
  }
  return undefined;
};

/**
 * Validate a sms: link.
 */
const validSms = (link: string) => {
  // https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/SMSLinks/SMSLinks.html
  if (!link.replace(/ /g, '').match(/^sms:([0-9.+-]+)?$/)) {
    return 'invalid';
  }
  if (link.indexOf(' ') !== -1) {
    return 'contains a space';
  }
  return undefined;
};

/**
 * Validate a tel: link.
 */
const validTel = (link: string) => {
  // https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/PhoneLinks/PhoneLinks.html#//apple_ref/doc/uid/TP40007899-CH6-SW1
  if (!link.replace(/ /g, '').match(/^tel:([0-9.+-]+)?$/)) {
    return 'invalid';
  }
  if (link.indexOf(' ') !== -1) {
    return 'contains a space';
  }
  return undefined;
};

/**
 * Return if a `dest` link from a `src` file is valid or not.
 */
const validLocal = (files: { [key: string]: unknown }, src: string, dest: string) => {
  // TODO: anchor validation
  // Strip trailing anchor link
  const destNormalized = dest.replace(/#.*$/, '');

  // Reference to self is always valid
  if (destNormalized === '' || destNormalized === '.' || destNormalized === './') {
    return true;
  }

  const linkPath = path.join(path.dirname(src), destNormalized).replace(/[/\\]/g, '/');
  // Reference to self is always valid
  if (linkPath === '' || linkPath === '.' || linkPath === './') {
    return true;
  }

  return linkPath in files || path.join(linkPath, 'index.html').replace(/[/\\]/g, '/') in files;
};

const protocolValidators: { [key: string]: Validator } = {
  'facetime:': validFacetime,
  'facetime-audio:': validFacetime,
  'http:': validUrl,
  'https:': validUrl,
  'mailto:': validMailto,
  'sms:': validSms,
  'tel:': validTel,
};

/**
 * Plugin entrypoint.
 */
export default (options: Options = {}): Metalsmith.Plugin => {
  const defaultedOptions = deepmerge(
    {
      html: {
        pattern: '**/*.html',
        tags: {
          a: 'href',
          img: ['src', 'data-src'],
          link: 'href',
          script: 'src',
        },
      },
      timeout: 10 * 1000,
      attempts: 1,
      userAgent,
      parallelism: 100,
    } satisfies Options,
    options || {},
  );

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-link-checker');
    debug('running with options: %O', defaultedOptions);

    const normalizedFilenames = Object.keys(files).reduce(
      (reducer, filename) => {
        reducer[filename.replace(/[/\\]/g, '/')] = true;
        return reducer;
      },
      {} as { [key: string]: boolean },
    );

    // Gather a list of filename + link combinations, and remove ignored links
    const ignore = (defaultedOptions.ignore ?? []).map((pattern) => new RegExp(pattern));
    const filenamesAndLinks = [
      ...htmlLinks(metalsmith, files, defaultedOptions),
      // TODO: CSS files
      // TODO: manifest files
    ]
      // Filter this out if this a duplicate of an item earlier in the array
      .filter((v1, idx, arr) => {
        const comparator = (v2: FilenameAndLink) => JSON.stringify(v1) === JSON.stringify(v2);
        return arr.findIndex(comparator) === idx;
      })
      // Filter this out if any ignore regex matches
      .filter((filenameAndLink) => {
        const comparator = (re: RegExp) => re.test(filenameAndLink.link);
        return !ignore.some(comparator);
      })
      // Shuffle to try to disperse checking the same domain concurrently
      .sort(() => Math.random() - 0.5);

    // For each link, find the files it is broken for
    async.mapLimit(
      filenamesAndLinks,
      defaultedOptions.parallelism,
      async (filenameAndLink: FilenameAndLink): Promise<FilenameAndLinkWithResult> => {
        const { filename, link } = filenameAndLink;

        // Validate links with a protocol (remote links)
        const linkUrl = urlParse(link);
        if (linkUrl && linkUrl.protocol) {
          if (protocolValidators[linkUrl.protocol] !== undefined) {
            const result = await protocolValidators[linkUrl.protocol](
              link,
              defaultedOptions,
              debug,
            );
            // Call the callback with the validation result
            return { ...filenameAndLink, result };
          }

          // Assume all unknown protocols are valid
          return { ...filenameAndLink, result: undefined };
        }

        // Validate local files
        return {
          ...filenameAndLink,
          result: validLocal(normalizedFilenames, filename, link) ? undefined : 'not found',
        };
      },
      (err, result) => {
        if (err) {
          done(err);
          return;
        }

        if (!result) {
          done();
          return;
        }

        const filenamesToLinkErrors = result
          .filter((falwr): falwr is FilenameAndLinkWithResult => falwr !== undefined)
          .filter((filenameAndLink) => filenameAndLink.result)
          .reduce(
            (obj, filenameAndLink) => {
              if (!obj[filenameAndLink.filename]) {
                obj[filenameAndLink.filename] = [];
              }
              obj[filenameAndLink.filename].push(
                `${filenameAndLink.link} (${filenameAndLink.result})`,
              );
              return obj;
            },
            {} as { [key: string]: string[] },
          );

        // Return a pretty formatted error if there are bad links
        if (Object.keys(filenamesToLinkErrors).length) {
          const message = Object.keys(filenamesToLinkErrors)
            .sort()
            .map((filename) => {
              const output = filenamesToLinkErrors[filename]
                .sort()
                .map((linkError) => `  ${linkError}`)
                .join('\n');
              return `${filename}:\n${output}`;
            })
            .join('\n\n');
          done(new Error(`Broken links found:\n\n${message}`));
          return;
        }

        done();
      },
    );
  };
};
