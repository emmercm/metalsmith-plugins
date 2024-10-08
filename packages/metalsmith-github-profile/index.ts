import async from 'async';
import deepmerge from 'deepmerge';
import http from 'http';
import https from 'https';
import Metalsmith from 'metalsmith';
import { URL } from 'url';

export interface Options {
  username: string;
  timeout?: number;
  authorization?: {
    username?: string;
    token?: string;
  } & { [key: string]: string | undefined };
  retries?: number;
  retryableStatusCodes?: number[];
}

const retryJsonGet = <T>(
  link: string,
  options: Options,
  callback: (error: Error | null, data: T | null) => void,
  attempt = 1,
) => {
  const url = new URL(link);
  const library = {
    'http:': http,
    'https:': https,
  }[url.protocol];
  if (!library) {
    throw new Error(`protocol not supported: ${url.protocol}`);
  }

  const requestOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'metalsmith-github-profile',
      Authorization: '',
    },
    timeout: options.timeout,
  } satisfies http.RequestOptions;

  let authorized = false;
  if (options.authorization && Object.keys(options.authorization)) {
    const token = `${options.authorization.username}:${options.authorization.token}`;
    requestOptions.headers.Authorization = `Basic ${Buffer.from(token).toString('base64')}`;
    authorized = true;
  }

  const req = library.request(link, requestOptions, (res) => {
    const rateLimitLimit = parseInt(res.headers['x-ratelimit-limit'] as string, 10);
    const rateLimitRemaining = parseInt(res.headers['x-ratelimit-remaining'] as string, 10);
    const rateLimitReset = parseInt(res.headers['x-ratelimit-reset'] as string, 10);

    // Try to warn the user about silent authentication issues if authorization was intended
    if (authorized && rateLimitLimit < 1000) {
      console.log(
        `WARN: Authorization possibly failed, ${rateLimitRemaining}/${rateLimitLimit} rate limit calls remaining`,
      );
    }

    if (res.statusCode && (res.statusCode < 200 || res.statusCode > 299)) {
      if ((options.retryableStatusCodes ?? []).includes(res.statusCode)) {
        if (attempt <= (options.retries ?? 0)) {
          setTimeout(
            () => {
              retryJsonGet(link, options, callback, attempt + 1);
            },
            2 ** attempt * 100,
          );
        } else {
          callback(new Error('retry limit reached'), null);
        }
      } else {
        let message = `HTTP ${res.statusCode}: ${res.statusMessage}`;
        if (rateLimitRemaining <= 0) {
          message += `(rate limit reset at ${new Date(rateLimitReset * 1000).toLocaleString()})`;
        }
        callback(new Error(message), null);
      }
      return;
    }

    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      callback(null, JSON.parse(data));
    });
  });

  req.on('error', (err) => {
    callback(err, null);
  });

  req.on('timeout', () => {
    req.destroy(); // cause an error
  });

  req.end();
};

const getUser =
  (username: string, debug: Metalsmith.Debugger) =>
  (options: Options, callback: (error: Error | null, data: unknown) => void) => {
    debug('fetching user: %s', username);
    retryJsonGet(`https://api.github.com/users/${username}`, options, callback);
  };

type Repo = { owner?: object; name: string };
const getRepos =
  (username: string, debug: Metalsmith.Debugger, page = 1, prevResults: Repo[] = []) =>
  (options: Options, callback: (error: Error | null, data: unknown) => void) => {
    debug('fetching repos for user: %s, page %i', username, page);
    retryJsonGet<Repo[]>(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
      options,
      (err, data) => {
        // Recurse to get all pages
        if (data && Array.isArray(data) && data.length) {
          const results = [...prevResults, ...data];
          getRepos(username, debug, page + 1, results)(options, callback);
          return;
        }

        // Key the results by repo name
        const results = prevResults.reduce(
          (obj, repo) => {
            delete repo.owner; // large, duplicate info
            obj[repo.name] = repo;
            return obj;
          },
          {} as { [key: string]: unknown },
        );

        callback(err, results);
      },
    );
  };

/**
 * Plugin entrypoint.
 * @param {Object} options
 * @returns {function(Object.<string, Object>, Object, function)}
 */
export default (options: Options): Metalsmith.Plugin => {
  const defaultedOptions = deepmerge(
    {
      username: '',
      timeout: 5 * 1000,
      retries: 3,
      retryableStatusCodes: [0, 408, 500, 502, 503, 504],
    } satisfies Options,
    options || {},
  );

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-github-profile');
    debug('running with options: %O', defaultedOptions);

    const methods = {
      user: getUser(defaultedOptions.username, debug),
      repos: getRepos(defaultedOptions.username, debug),
    };
    async.mapValues(
      methods,
      (value, key, callback) => {
        value(defaultedOptions, callback);
      },
      (err, result) => {
        if (err) {
          done(err);
          return;
        }

        const metadata = metalsmith.metadata() as { github?: { profile?: object } };
        if (!metadata.github) {
          metadata.github = {};
        }
        metadata.github.profile = result;

        done();
      },
    );
  };
};
