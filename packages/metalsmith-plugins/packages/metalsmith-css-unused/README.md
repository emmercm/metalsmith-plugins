# metalsmith-css-unused

[![npm Version](https://badgen.net/npm/v/metalsmith-css-unused?icon=npm)](https://www.npmjs.com/package/metalsmith-css-unused)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-css-unused)](https://www.npmjs.com/package/metalsmith-css-unused)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-css-unused/badge.svg)](https://snyk.io/test/npm/metalsmith-css-unused)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-css-unused/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-css-unused)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-css-unused?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-css-unused/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-css-unused/purple?icon=github)](https://github.com/emmercm/metalsmith-css-unused)
[![License](https://badgen.net/github/license/emmercm/metalsmith-css-unused?color=grey)](https://github.com/emmercm/metalsmith-css-unused/blob/master/LICENSE)

A Metalsmith plugin to remove unused CSS rules.

This plugin works by removing rules in every CSS file that don't match any content in any HTML files.

CSS files are not moved or combined in any way, only the content of the files is changed. You can use plugins such as [`metalsmith-renamer`](https://www.npmjs.com/package/metalsmith-renamer) or [`metalsmith-concat`](https://www.npmjs.com/package/metalsmith-concat) to rename or combine your CSS files before or after this plugin.

You might also want to consider minifying your CSS files after this plugin using [`@metalsmith/postcss`](https://www.npmjs.com/package/@metalsmith/postcss) with [`cssnano`](https://www.npmjs.com/package/cssnano) or another similar plugin.

## Installation

```bash
npm install --save metalsmith-css-unused
```

## JavaScript Usage

```javascript
const Metalsmith = require('metalsmith');
const cssUnused  = require('metalsmith-css-unused');

Metalsmith(__dirname)
    .use(cssUnused({
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

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern to find HTML files.

### `css` (optional)

Type: `string` Default: `**/*.css`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern to find CSS files.

### `purgecss` (optional)

Type: `object` Default: `{}`

An object of [PurgeCSS options](https://purgecss.com/configuration.html#options).

## Example

```javascript
const Metalsmith = require('metalsmith');
const cssUnused  = require('metalsmith-css-unused');

Metalsmith(__dirname)
    .use(cssUnused({
        purgecss: {
            safelist: [
                // Bootstrap 4 JavaScript
                /\.carousel-item-.+/,
                /\.modal/,
                /\.show/
            ]
        }
    }))
```

## Changelog

[Changelog](./CHANGELOG.md)
