# metalsmith-css-unused

[![npm Version](https://badgen.net/npm/v/metalsmith-css-unused?icon=npm)](https://www.npmjs.com/package/metalsmith-css-unused)
[![node Version](https://badgen.net/npm/node/metalsmith-css-unused)](https://github.com/emmercm/metalsmith-css-unused/blob/master/package.json)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-css-unused)](https://www.npmjs.com/package/metalsmith-css-unused)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-css-unused/badge.svg)](https://snyk.io/test/npm/metalsmith-css-unused)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-css-unused/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-css-unused)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-css-unused?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-css-unused/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-css-unused/purple?icon=github)](https://github.com/emmercm/metalsmith-css-unused)
[![License](https://badgen.net/github/license/emmercm/metalsmith-css-unused?color=grey)](https://github.com/emmercm/metalsmith-css-unused/blob/master/LICENSE)

A Metalsmith plugin to run UnCSS stylesheet optimizer.

## Installation

```bash
npm install --save metalsmith-css-unused
```

## JavaScript Usage

```javascript
const Metalsmith = require('metalsmith');
const uncss      = require('metalsmith-css-unused');

Metalsmith(__dirname)
    .use(uncss({
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

### `css` (optional)

Type: `string` Default: `**/*.css`

A [minimatch](https://www.npmjs.com/package/minimatch) glob pattern to find CSS files.

### `output` (optional)

Type: `string` Default: `uncss.css`

The output CSS filename.

### `uncss` (optional)

Type: `object` Default:

```json
{
  "banner": false,
  "jsdom": {
    "runScripts": "outside-only"
  }
}
```

An object of [UnCSS options](https://github.com/uncss/uncss#usage).

## Example

```javascript
const uncss = require('metalsmith-css-unused');

Metalsmith(__dirname)
    .use(uncss({
        output: 'static/css/styles.css',
        uncss: {
            ignore: [
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
