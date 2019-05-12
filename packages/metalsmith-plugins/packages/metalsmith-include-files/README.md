# metalsmith-include-files

[![](https://badgen.net/npm/v/metalsmith-include-files?icon=npm)](https://www.npmjs.com/package/metalsmith-include-files)
[![](https://badgen.net/npm/dw/metalsmith-include-files?icon=npm)](https://www.npmjs.com/package/metalsmith-include-files)

[![](https://badgen.net/badge/emmercm/metalsmith-include-files/purple?icon=github)](https://github.com/emmercm/metalsmith-include-files)
[![](https://badgen.net/circleci/github/emmercm/metalsmith-include-files/master?icon=circleci)](https://github.com/emmercm/metalsmith-include-files/blob/master/.circleci/config.yml)
[![](https://badgen.net/github/license/emmercm/metalsmith-include-files?color=grey)](https://github.com/emmercm/metalsmith-include-files/blob/master/LICENSE)

A Metalsmith plugin to include external files.

## Installation

```bash
npm install metalsmith-include-files
```

## JavaScript Usage

```javascript
const include = require('metalsmith-include-files');

Metalsmith(__dirname)
    .use(include({
        // options here
    }))
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
