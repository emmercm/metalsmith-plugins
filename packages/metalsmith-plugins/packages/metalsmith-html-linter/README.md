# metalsmith-html-linter

[![npm Version](https://badgen.net/npm/v/metalsmith-html-linter?icon=npm)](https://www.npmjs.com/package/metalsmith-html-linter)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-html-linter)](https://www.npmjs.com/package/metalsmith-html-linter)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-html-linter/badge.svg)](https://snyk.io/test/npm/metalsmith-html-linter)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-html-linter/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-html-linter)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-html-linter?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-html-linter/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-html-linter/purple?icon=github)](https://github.com/emmercm/metalsmith-html-linter)
[![License](https://badgen.net/github/license/emmercm/metalsmith-html-linter?color=grey)](https://github.com/emmercm/metalsmith-html-linter/blob/master/LICENSE)

A Metalsmith plugin to lint HTML.

## Installation

```bash
npm install --save metalsmith-html-linter
```

## JavaScript Usage

```javascript
const Metalsmith = require('metalsmith');
const linter     = require('metalsmith-html-linter');

Metalsmith(__dirname)
    .use(linter({
        // options here
    }))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## Options

### `html` (optional)

Type: `string` Default: `**/*.html`

A [minimatch](https://www.npmjs.com/package/minimatch) glob pattern to find HTML files.

### `htmllint` (optional)

Type: `object` Default:

```json
{
    "attr-bans": [
        "align", "alink", "background", "bgcolor", "border", "cellpadding", "cellspacing", "char", "charoff", "clear", "compact", "frame", "frameborder", "height", "hspace", "link", "marginheight", "marginwidth", "noshade", "nowrap", "rules", "scrolling", "size", "text", "valign", "vlink", "vspace", "width"
    ],
    "attr-req-value": false,
    "doctype-first": true,
    "id-class-style": false,
    "indent-style": false,
    "indent-width": false,
    "line-end-style": false,
    "line-no-trailing-whitespace": false,
    "spec-char-escape": false,
    "tag-bans": [
        "acronym", "applet", "basefont", "big", "center", "dir", "font", "frame", "frameset", "isindex", "noframes", "strike", "tt"
    ],
    "tag-name-lowercase": false,
    "title-max-len": false
}
```

Note: [`htmllint`](https://github.com/htmllint/htmllint) has an opinionated set of default options that are inconsistent with the HTML5 specification, hence the complicated default.

An object of [`htmllint` options](https://github.com/htmllint/htmllint/wiki/Options).

### `ignoreTags` (optional)

Type: `string[]` Default: `["code", "pre", "textarea"]`

An array of [cheerio](https://cheerio.js.org/) selectors to remove before linting.

### `parallelism` (optional)

Type: `number` Default: the number of logical CPU cores available

The maximum number of async operations at a time.

## Changelog

[Changelog](./CHANGELOG.md)
