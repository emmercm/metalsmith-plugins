import deepmerge from 'deepmerge';
import Metalsmith from 'metalsmith';
import readingTime, { Options as ReadingTimeOptions } from 'reading-time';

export interface Options {
  pattern?: string,
  stripHtml?: boolean,
  replacements?: string[][],
  readingTime?: ReadingTimeOptions,
}

export default (options: Options = {}): Metalsmith.Plugin => {
  const defaultedOptions = deepmerge({
    pattern: '**/*',
    stripHtml: true,
    replacements: [],
    readingTime: {},
  } satisfies Options, options || {});

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-reading time');
    debug('running with options: %O', defaultedOptions);

    // For each file that matches the given pattern
    metalsmith.match(defaultedOptions.pattern, Object.keys(files))
      .forEach((filename) => {
        debug('processing file: %s', filename);

        let contents = files[filename].contents.toString();

        if (defaultedOptions.stripHtml) {
          contents = contents
            // XML
            .replace(/<\?xml[^>]+\?>/gs, ' ') // namespaces
            .replace(/<!--.*?-->/gs, ' ') // comments
            // HTML
            .replace(/<[a-zA-Z0-9]+[^>]*>/gs, ' ') // start tag
            .replace(/<\/[a-zA-Z0-9]+>/gs, ' ') // end tag
            .trim();
        }

        if (defaultedOptions.replacements && defaultedOptions.replacements.length) {
          defaultedOptions.replacements.forEach((replacement) => {
            let pattern: string | RegExp = replacement[0];
            const matches = pattern.match(/^\/(.+)\/([a-z]*)/);
            if (matches) {
              pattern = new RegExp(matches[1], matches[2]);
            }

            contents = contents.replace(pattern, replacement[1]);
          });
        }

        files[filename].readingTime = readingTime(contents, defaultedOptions.readingTime).text;
      });

    done(null, files, metalsmith);
  };
};
