import deepmerge from 'deepmerge';
import Metalsmith from 'metalsmith';
import { PurgeCSS, UserDefinedOptions } from 'purgecss';

export interface Options {
  html?: string;
  css?: string;
  purgecss?: UserDefinedOptions;
}

export default (options: Options = {}): Metalsmith.Plugin => {
  const defaultedOptions = deepmerge(
    {
      html: '**/*.html',
      css: '**/*.css',
      purgecss: {},
    },
    options || {},
  );

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-css-unused');
    debug('running with options: %O', defaultedOptions);

    // Build list of HTML content
    defaultedOptions.purgecss.content = metalsmith
      .match(defaultedOptions.html, Object.keys(files))
      .map((filename) => ({
        raw: files[filename].contents.toString(),
        extension: 'html',
      }));

    // Build list of CSS content
    const cssFiles = metalsmith.match(defaultedOptions.css, Object.keys(files));
    defaultedOptions.purgecss.css = cssFiles.map((filename) => ({
      raw: files[filename].contents.toString(),
    }));

    new PurgeCSS()
      .purge(defaultedOptions.purgecss)
      .then((purgecss) => {
        for (let i = 0; i < purgecss.length; i += 1) {
          files[cssFiles[i]].contents = Buffer.from(purgecss[i].css);
        }

        done();
      })
      .catch((err) => {
        debug.error('purgecss error: %s', err);
        done(err);
      });
  };
};
