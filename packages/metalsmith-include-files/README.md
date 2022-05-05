# metalsmith-include-files

[![npm Version](https://badgen.net/npm/v/metalsmith-include-files?icon=npm)](https://www.npmjs.com/package/metalsmith-include-files)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-include-files)](https://www.npmjs.com/package/metalsmith-include-files)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-include-files/badge.svg)](https://snyk.io/test/npm/metalsmith-include-files)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-include-files/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-include-files)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-include-files?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-include-files/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-include-files/purple?icon=github)](https://github.com/emmercm/metalsmith-include-files)
[![License](https://badgen.net/github/license/emmercm/metalsmith-include-files?color=grey)](https://github.com/emmercm/metalsmith-include-files/blob/master/LICENSE)

A Metalsmith plugin to include external files in your build.

A common use case is wanting to include JavaScript, CSS, or font files from an installed NPM package such as [bootstrap](https://www.npmjs.com/package/bootstrap).

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

The option dictionary passed to the plugin is in the form:

```json
{
  "[output directory one]": [
    "[micromatch pattern]",
    "[micromatch pattern]"
  ],
  "[output directory two]": [
    "[micromatch pattern]",
    "[micromatch pattern]"
  ]
}
```

where you can define any number of output directories, and each of those can have any number of micromatch patterns of files to include.

## Example

To include a number of static assets from [jquery](https://www.npmjs.com/package/jquery), [bootstrap](https://www.npmjs.com/package/bootstrap), and [@fortawesome/fontawesome-free](https://www.npmjs.com/package/@fortawesome/fontawesome-free) in your output files:

```javascript
const include = require('metalsmith-include-files');

Metalsmith(__dirname)
    .use(include({
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
    }))
```

## Changelog

[Changelog](./CHANGELOG.md)
