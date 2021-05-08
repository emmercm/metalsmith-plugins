'use strict';

const os = require('os');

const async = require('async');
const cheerio = require('cheerio');
const codeFrame = require('@babel/code-frame');
const deepmerge = require('deepmerge');
const htmllint = require('htmllint');
const minimatch = require('minimatch');

module.exports = (options) => {
  options = deepmerge({
    html: '**/*.html',
    htmllint: {
      'attr-bans': [
        // https://www.w3.org/TR/html5-diff/#obsolete-attributes
        // https://web.dev/optimize-cls/#images-without-dimensions (Google Lighthouse)
        'align', 'alink', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'char', 'charoff', 'clear', 'compact', 'frame', 'frameborder', 'hspace', 'link', 'marginheight', 'marginwidth', 'noshade', 'nowrap', 'rules', 'scrolling', 'size', 'text', 'valign', 'vlink', 'vspace',
      ],
      'attr-req-value': false, // https://dev.w3.org/html5/spec-LC/syntax.html#attributes-0
      'doctype-first': true, // https://dev.w3.org/html5/spec-LC/syntax.html#the-doctype
      'id-class-style': false,
      'indent-style': false,
      'indent-width': false,
      'line-end-style': false,
      'line-no-trailing-whitespace': false,
      'spec-char-escape': false, // https://github.com/htmllint/htmllint/issues/267
      'tag-bans': [ // https://www.w3.org/TR/html5-diff/#obsolete-elements
        'acronym', 'applet', 'basefont', 'big', 'center', 'dir', 'font', 'frame', 'frameset', 'isindex', 'noframes', 'strike', 'tt',
      ],
      'tag-name-lowercase': false, // https://dev.w3.org/html5/spec-LC/syntax.html#elements-0,
      'title-max-len': false, // https://dev.w3.org/html5/spec-LC/semantics.html#the-title-element
    },
    ignoreTags: [
      // https://github.com/htmllint/htmllint/issues/194
      'code',
      'pre',
      'textarea',
    ],
    parallelism: os.cpus().length,
  }, options || {}, { arrayMerge: (destinationArray, sourceArray) => sourceArray });

  return (files, metalsmith, done) => {
    const htmlFiles = Object.keys(files)
      .filter(minimatch.filter(options.html));

    const failures = [];

    async.eachLimit(htmlFiles, options.parallelism, (filename, complete) => {
      const file = files[filename];
      const $ = cheerio.load(file.contents);

      // Remove ignored tags
      $(options.ignoreTags.join(', ')).html('');

      const contents = $.html();

      htmllint(contents, options.htmllint)
        .then((results) => {
          if (results.length) {
            const codeFrames = results
              .map((result) => {
                // Use @babel/code-frame to get a more human-readable error message
                const frame = codeFrame.codeFrameColumns(contents, { start: result });
                let data = '';
                if (Object.keys(result.data).length) {
                  data = ` ${JSON.stringify(result.data)}:`;
                }
                return `${result.rule} (${result.code}):${data}\n\n${frame.replace(/^/gm, '  ')}`;
              })
              .join('\n\n');

            failures.push(`${filename}:\n\n${codeFrames.replace(/^/gm, '  ')}`);
          }

          complete();
        });
    }, () => {
      if (failures.length) {
        done(failures.join('\n\n'));
      }

      done();
    });
  };
};
