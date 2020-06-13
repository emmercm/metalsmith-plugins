# metalsmith-uncss-2

[![npm Version](https://badgen.net/npm/v/metalsmith-uncss-2?icon=npm)](https://www.npmjs.com/package/metalsmith-uncss-2)
[![node Version](https://badgen.net/npm/node/metalsmith-uncss-2)](https://github.com/emmercm/metalsmith-uncss-2/blob/master/package.json)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-uncss-2)](https://www.npmjs.com/package/metalsmith-uncss-2)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-uncss-2/badge.svg)](https://snyk.io/test/npm/metalsmith-uncss-2)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-uncss-2/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-uncss-2)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-uncss-2?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-uncss-2/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-uncss-2/purple?icon=github)](https://github.com/emmercm/metalsmith-uncss-2)
[![License](https://badgen.net/github/license/emmercm/metalsmith-uncss-2?color=grey)](https://github.com/emmercm/metalsmith-uncss-2/blob/master/LICENSE)

A Metalsmith plugin to run UnCSS stylesheet optimizer.

## Installation

```bash
npm install --save metalsmith-uncss-2
```

## JavaScript Usage

```javascript
const Metalsmith = require('metalsmith');
const uncss      = require('metalsmith-uncss-2');

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
const uncss = require('metalsmith-uncss-2');

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
