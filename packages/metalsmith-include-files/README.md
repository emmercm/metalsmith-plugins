# metalsmith-include-files

[![npm Version](https://badgen.net/npm/v/metalsmith-include-files?icon=npm)](https://www.npmjs.com/package/metalsmith-include-files)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-include-files)](https://www.npmjs.com/package/metalsmith-include-files)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-include-files/badge.svg)](https://snyk.io/test/npm/metalsmith-include-files)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-include-files/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-include-files)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-include-files?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-include-files/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-include-files/purple?icon=github)](https://github.com/emmercm/metalsmith-include-files)
[![License](https://badgen.net/github/license/emmercm/metalsmith-include-files?color=grey)](https://github.com/emmercm/metalsmith-include-files/blob/master/LICENSE)

A Metalsmith plugin to include external files in your build.

A common use case is wanting to include JavaScript, CSS, or font files from an installed NPM package such as [`bootstrap`](https://www.npmjs.com/package/bootstrap).

## Installation

```bash
npm install --save metalsmith-include-files
```

## JavaScript Usage

```javascript
const Metalsmith = require('metalsmith');
const include    = require('metalsmith-include-files');

Metalsmith(__dirname)
    .use(include({
        // options here
    }))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## Options

### `directories` (required)

Type: `object`

A dictionary where the keys are Metalsmith build output directories, and the values are an array of [micromatch](https://github.com/micromatch/micromatch) patterns for files on your filesystem.

Example structure:

```json
{
  "directories": {
    "[output directory 1]": [
      "[micromatch pattern 1]",
      "[micromatch pattern 2]"
    ],
    "[output directory 2]": [
      "[micromatch pattern 3]",
      "[micromatch pattern 4]"
    ]
  }
}
```

### `overwrite` (optional)

Type: `boolean` Default: `false`

Whether existing files in the Metalsmith build output can be overwritten or not. An exception will be raised if the option is `false` and there is a duplicate filename.

## Example

To include a number of static assets from [`jquery`](https://www.npmjs.com/package/jquery), [`bootstrap`](https://www.npmjs.com/package/bootstrap), and [`@fortawesome/fontawesome-free`](https://www.npmjs.com/package/@fortawesome/fontawesome-free) in your output files:

```javascript
const include = require('metalsmith-include-files');

Metalsmith(__dirname)
    .use(include({
        directories: {
            'static/css': [
                './node_modules/bootstrap/dist/css/bootstrap.min.css',
                './node_modules/@fortawesome/fontawesome-free/css/all.min.css'
            ],
            'static/js': [
                './node_modules/jquery/dist/jquery.slim.js',
                './node_modules/bootstrap/dist/js/bootstrap.min.js'
            ],
            'static/webfonts': [
                './node_modules/@fortawesome/fontawesome-free/webfonts/*'
            ]
        }
    }))
```

## Changelog

[Changelog](./CHANGELOG.md)
