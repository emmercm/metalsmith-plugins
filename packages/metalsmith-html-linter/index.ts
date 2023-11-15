import codeFrame from '@babel/code-frame';
import linthtml, { LegacyLinterConfig, LinterConfig } from '@linthtml/linthtml';
import async from 'async';
import * as cheerio from 'cheerio';
import deepmerge from 'deepmerge';
import Metalsmith from 'metalsmith';
import os from 'os';

export interface Options {
  html?: string,
  parallelism?: number,
  ignoreTags?: string[],
  htmllint?: LegacyLinterConfig,
  linthtml?: LinterConfig,
}

const upgradeHtmllintConfig = (htmllint: LegacyLinterConfig): LinterConfig => {
  const config: { [key: string]: unknown } = {};

  // https://github.com/linthtml/linthtml/blob/0.3.0/docs/migrations.md
  const rules = Object.keys(htmllint)
    .reduce((acc, rule) => {
      const ruleConfig = htmllint[rule];
      if (typeof ruleConfig === 'boolean') {
        acc[rule] = ruleConfig;
      } else {
        acc[rule] = [true, ruleConfig];
      }
      return acc;
    }, {} as { [key: string]: unknown });
  ['maxerr',
    'text-ignore-regex',
    'raw-ignore-regex',
    'attr-name-ignore-regex',
    'id-class-ignore-regex',
    'line-max-len-ignore-regex']
    .forEach((rule) => {
      if (rules[rule] !== undefined) {
        config[rule] = rules[rule];
        delete rules[rule];
      }
    });
  config.rules = rules;

  return config;
};

// Get the linthtml (written in  htmllint config) and upgrade it
const linthtmlDefault = upgradeHtmllintConfig(linthtml.default.presets.default);

export default (options: Options = {}): Metalsmith.Plugin => {
  // Upgrade any old htmllint config
  if (options.htmllint !== undefined) {
    options.linthtml = upgradeHtmllintConfig(options.htmllint);
    delete options.htmllint;
  }

  const defaultedOptions: Options = deepmerge.all(
    [
      {
        linthtml: {
          ...linthtmlDefault,
        },
      },
      {
        html: '**/*.html',
        linthtml: {
          'text-ignore-regex': /&[a-zA-Z0-9]+=/, // https://github.com/htmllint/htmllint/issues/267
          rules: {
            'attr-bans': [
              // https://www.w3.org/TR/html5-diff/#obsolete-attributes
              // https://web.dev/optimize-cls/#images-without-dimensions (Google Lighthouse)
              true,
              ['align', 'alink', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'char', 'charoff', 'clear', 'compact', 'frame', 'frameborder', 'hspace', 'link', 'marginheight', 'marginwidth', 'noshade', 'nowrap', 'rules', 'scrolling', 'size', 'text', 'valign', 'vlink', 'vspace'],
            ],
            'attr-req-value': false, // https://dev.w3.org/html5/spec-LC/syntax.html#attributes-0
            'doctype-first': true, // https://dev.w3.org/html5/spec-LC/syntax.html#the-doctype
            'id-class-style': false,
            'indent-style': false,
            'indent-width': false,
            'line-end-style': false,
            'line-no-trailing-whitespace': false,
            'tag-bans': [ // https://www.w3.org/TR/html5-diff/#obsolete-elements
              true,
              ['acronym', 'applet', 'basefont', 'big', 'center', 'dir', 'font', 'frame', 'frameset', 'isindex', 'noframes', 'strike', 'tt'],
            ],
            'tag-name-lowercase': false, // https://dev.w3.org/html5/spec-LC/syntax.html#elements-0,
            'title-max-len': false, // https://dev.w3.org/html5/spec-LC/semantics.html#the-title-element
          },
        },
        ignoreTags: [
          // https://github.com/htmllint/htmllint/issues/194
          'code',
          'pre',
          'svg',
          'textarea',
        ],
        parallelism: os.cpus().length,
      },
      options || {},
    ],
    { arrayMerge: (destinationArray, sourceArray) => sourceArray },
  );

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-html-linter');
    debug('running with options: %O', defaultedOptions);

    const htmlFiles = metalsmith.match(defaultedOptions.html ?? '**/*', Object.keys(files));

    const failures: string[] = [];

    async.eachLimit(htmlFiles, defaultedOptions.parallelism ?? 1, (filename, complete) => {
      debug('processing file: %s', filename);

      const file = files[filename];
      const $ = cheerio.load(file.contents, {
        // @ts-expect-error: _useHtmlParser2 is necessary but isn't exposed in CheerioOptions
        _useHtmlParser2: true, // https://github.com/cheeriojs/cheerio/issues/1198
        decodeEntities: false,
      });

      // Remove ignored tags
      if (defaultedOptions.ignoreTags) {
        $(defaultedOptions.ignoreTags.join(', ')).remove();
      }

      const contents = $.html();

      linthtml.default(contents, defaultedOptions.linthtml ?? {})
        .then((results) => {
          if (results.length) {
            const codeFrames = results
              .map((result) => {
                // Use @babel/code-frame to get a more human-readable error message
                const frame = codeFrame.codeFrameColumns(contents, {
                  start: result.position.start,
                });
                let data = '';
                if (Object.keys(result.data as object).length) {
                  data = ` ${JSON.stringify(result.data)}:`;
                }
                return `${result.rule} (${result.code}):${data}\n\n${frame.replace(/^/gm, '  ')}`;
              })
              .join('\n\n');

            failures.push(`${filename}:\n\n${codeFrames.replace(/^/gm, '  ')}`);
          }

          complete();
        })
        .catch((err: unknown) => {
          debug.error('linthtml error: %s', err);
          failures.push(`${filename}:\n\n${err}`);
          complete();
        });
    }, (err) => {
      if (err) {
        done(err);
        return;
      }

      if (failures.length) {
        done(new Error(failures.join('\n\n')));
        return;
      }

      done();
    });
  };
};
