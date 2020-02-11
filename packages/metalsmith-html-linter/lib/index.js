'use strict';

const async = require('async');
const deepmerge = require('deepmerge');
const htmllint = require('htmllint');
const minimatch = require('minimatch');

module.exports = (options) => {
  options = deepmerge({
    html: '**/*.html',
    htmllint: {
      'attr-bans': [ // https://www.w3.org/TR/html5-diff/#obsolete-attributes
        'align', 'alink', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'char', 'charoff', 'clear', 'compact', 'frame', 'frameborder', 'height', 'hspace', 'link', 'marginheight', 'marginwidth', 'noshade', 'nowrap', 'rules', 'scrolling', 'size', 'text', 'type', 'valign', 'vlink', 'vspace', 'width',
      ],
      'attr-req-value': false, // https://dev.w3.org/html5/spec-LC/syntax.html#attributes-0
      'doctype-first': true, // https://dev.w3.org/html5/spec-LC/syntax.html#the-doctype
      'indent-style': false,
      'indent-width': false,
      'line-end-style': false,
      'line-no-trailing-whitespace': false,
      'tag-bans': [ // https://www.w3.org/TR/html5-diff/#obsolete-elements
        'acronym', 'applet', 'basefont', 'big', 'center', 'dir', 'font', 'frame', 'frameset', 'isindex', 'noframes', 'strike', 'tt',
      ],
      'tag-name-lowercase': false, // https://dev.w3.org/html5/spec-LC/syntax.html#elements-0,
      'title-max-len': false, // https://dev.w3.org/html5/spec-LC/semantics.html#the-title-element
    },
  }, options || {});

  return (files, metalsmith, done) => {
    const htmlFiles = Object.keys(files)
      .filter(minimatch.filter(options.html));

    const failures = {};

    async.eachLimit(htmlFiles, 4, (filename, complete) => {
      const file = files[filename];
      const contents = String.fromCharCode.apply(null, file.contents);

      htmllint(contents, options.htmllint)
        .then((results) => {
          if (results.length) {
            failures[filename] = results;
          }

          complete();
        });
    }, () => {
      if (Object.keys(failures).length) {
        done(JSON.stringify(failures, null, 2));
      }

      done();
    });
  };
};
