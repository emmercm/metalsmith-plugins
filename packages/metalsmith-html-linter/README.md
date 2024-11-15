# metalsmith-html-linter

[![npm: version](https://img.shields.io/npm/v/metalsmith-html-linter?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-html-linter)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-html-linter?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-html-linter)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-html-linter/badge.svg)](https://snyk.io/test/npm/metalsmith-html-linter)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-html-linter&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-html-linter)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to lint HTML for syntax and semantics.

This plugin will raise an exception and stop the build if any HTML files are found to be violating any configured [`linthtml`](https://www.npmjs.com/package/@linthtml/linthtml) rules. The goal is to catch any problems before they appear as errors in a browser.

## Installation

```shell
npm install --save metalsmith-html-linter
```

## JavaScript Usage

```javascript
import Metalsmith from 'metalsmith';
import linter from 'metalsmith-html-linter';

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

Type: `string` Default: `"**/*.html"`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern to find HTML files.

### `linthtmnl` (optional)

Type: `string` Default:

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
    "tag-bans": [
        "acronym", "applet", "basefont", "big", "center", "dir", "font", "frame", "frameset", "isindex", "noframes", "strike", "tt"
    ],
    "tag-name-lowercase": false,
    "title-max-len": false
}
```

An object of [`linthtml` options](https://github.com/linthtml/linthtml/blob/develop/docs/configuration.md). These will be merged with the [default `linthtml` options](https://github.com/linthtml/linthtml/blob/develop/lib/presets/default.js).

Note: [`linthtml`](https://www.npmjs.com/package/@linthtml/linthtml) has an opinionated set of default options inherited from [`htmllint`](https://www.npmjs.com/package/htmllint) that are inconsistent with the HTML5 specification, hence the complicated default.

### `htmllint` (deprecated)

Type: `object` Default: `undefined`

An object of [`htmllint` options](https://github.com/htmllint/htmllint/wiki/Options). These options may break in the future if [`linthtml`](https://www.npmjs.com/package/@linthtml/linthtml) stops supporting them, so the `linthtml` option above is preferred.

### `ignoreTags` (optional)

Type: `string[]` Default: `["code", "pre", "svg", "textarea"]`

An array of [`cheerio`](https://www.npmjs.com/package/cheerio) selectors of elements to remove before linting. These elements will not show up in any error output.

### `parallelism` (optional)

Type: `number` Default: the number of logical CPU cores available

The maximum number of HTML files to process concurrently.

## Changelog

[Changelog](./CHANGELOG.md)
