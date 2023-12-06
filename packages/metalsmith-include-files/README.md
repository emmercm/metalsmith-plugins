# metalsmith-include-files

[![npm: version](https://img.shields.io/npm/v/metalsmith-include-files?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-include-files)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-include-files?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-include-files)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-include-files/badge.svg)](https://snyk.io/test/npm/metalsmith-include-files)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-include-files&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-include-files)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to include external files in your build.

A common use case is wanting to include JavaScript, CSS, or font files from an installed NPM package such as [`bootstrap`](https://www.npmjs.com/package/bootstrap).

## Installation

```shell
npm install --save metalsmith-include-files
```

## JavaScript Usage

```javascript
import Metalsmith from 'metalsmith';
import include from 'metalsmith-include-files';

Metalsmith(__dirname)
    .use(include({
        directories: { /* ... */ }
        // other options here
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
import Metalsmith from 'metalsmith';
import include from 'metalsmith-include-files';

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
