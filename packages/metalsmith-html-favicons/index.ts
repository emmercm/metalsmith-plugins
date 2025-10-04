import path from 'node:path';

import * as cheerio from 'cheerio';
import deepmerge from 'deepmerge';
import favicons, { FaviconOptions } from 'favicons';
import Metalsmith from 'metalsmith';

export interface Options {
  icon: string;
  destination?: string;
  html?: string;
  favicons?: FaviconOptions;
}

export default (options: Options): Metalsmith.Plugin => {
  const defaultedOptions = deepmerge(
    {
      icon: '',
      destination: '',
      html: '**/*.html',
      favicons: {
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          favicons: true,
          windows: false,
          yandex: false,
        },
      } satisfies FaviconOptions,
    } satisfies Options,
    options || {},
  );

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-html-favicons');
    debug('running with options: %O', defaultedOptions);

    if (defaultedOptions.icon.trim() === '') {
      done(new Error('icon path cannot be empty'));
      return;
    }

    // Get the icon's contents
    let iconContents: Buffer | undefined;
    if (files[defaultedOptions.icon]) {
      iconContents = files[defaultedOptions.icon].contents;
    } else {
      const iconPath = metalsmith.match(defaultedOptions.icon, Object.keys(files)).at(0);
      if (iconPath !== undefined) {
        iconContents = files[iconPath].contents;
      }
    }

    if (iconContents === undefined) {
      done(new Error(`no file found at path '${defaultedOptions.icon}'`));
      return;
    }

    favicons(iconContents, defaultedOptions.favicons)
      .then((response) => {
        // Save all the generated images
        response.images.forEach((image) => {
          files[path.join(defaultedOptions.destination, image.name)] = {
            contents: image.contents,
          };
        });

        // Save all the other manifest files
        response.files.forEach((file) => {
          files[path.join(defaultedOptions.destination, file.name)] = {
            contents: Buffer.from(file.contents),
          };
        });

        // Update HTML pages
        if (response.html.length > 0) {
          metalsmith.match(defaultedOptions.html, Object.keys(files)).forEach((filename) => {
            const file = files[filename];
            const $ = cheerio.load(file.contents);

            const $head = $('head');
            response.html.forEach((html) => {
              $head.append(html);
            });

            file.contents = Buffer.from($.html());
          });
        }

        done();
      })
      .catch((err) => {
        debug.error('favicons error: %s', err);
        done(err);
      });
  };
};
