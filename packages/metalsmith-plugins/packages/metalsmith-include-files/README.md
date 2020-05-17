# metalsmith-include-files

[![npm Version](https://badgen.net/npm/v/metalsmith-include-files?icon=npm)](https://www.npmjs.com/package/metalsmith-include-files)
[![node Version](https://badgen.net/npm/node/metalsmith-include-files)](https://github.com/emmercm/metalsmith-include-files/blob/master/package.json)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-include-files)](https://www.npmjs.com/package/metalsmith-include-files)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-include-files/badge.svg)](https://snyk.io/test/npm/metalsmith-include-files)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-include-files/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-include-files)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-include-files?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-include-files/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-include-files/purple?icon=github)](https://github.com/emmercm/metalsmith-include-files)
[![License](https://badgen.net/github/license/emmercm/metalsmith-include-files?color=grey)](https://github.com/emmercm/metalsmith-include-files/blob/master/LICENSE)

A Metalsmith plugin to include external files.

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

## Example

```javascript
const include = require('metalsmith-include-files');

Metalsmith(__dirname)
    .use(include({
        'static/js': [
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './node_modules/jquery/dist/jquery.js',
        ]
    }))
```

## Changelog

[Changelog](./CHANGELOG.md)
