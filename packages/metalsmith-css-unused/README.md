# metalsmith-uncss-2

[![](https://badgen.net/npm/v/metalsmith-uncss-2?icon=npm)](https://www.npmjs.com/package/metalsmith-uncss-2)
[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-uncss-2/badge.svg)](https://snyk.io/test/npm/metalsmith-uncss-2)
[![](https://badgen.net/npm/dw/metalsmith-uncss-2)](https://www.npmjs.com/package/metalsmith-uncss-2)

[![](https://badgen.net/badge/emmercm/metalsmith-uncss-2/purple?icon=github)](https://github.com/emmercm/metalsmith-uncss-2)
[![](https://badgen.net/circleci/github/emmercm/metalsmith-uncss-2/master?icon=circleci)](https://github.com/emmercm/metalsmith-uncss-2/blob/master/.circleci/config.yml)
[![](https://badgen.net/codecov/c/github/emmercm/metalsmith-uncss-2/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-uncss-2)
[![](https://badgen.net/github/license/emmercm/metalsmith-uncss-2?color=grey)](https://github.com/emmercm/metalsmith-uncss-2/blob/master/LICENSE)

A Metalsmith plugin to run UnCSS stylesheet optimizer.

## Installation

```bash
npm install metalsmith-uncss-2
```

## JavaScript Usage

```javascript
const Metalsmith = require('metalsmith');
const uncss      = require('metalsmith-uncss-2');

Metalsmith(__dirname)
    .use(uncss({
        // options here
    }))
```

## Options

### Default Options

```json
{
    "html": "**/*.html",
    "css": "**/*.css",
    "output": "uncss.css"
}
```

### `html`

`string` - [minimatch](https://www.npmjs.com/package/minimatch) glob pattern for HTML files.

### `css`

`string` - [minimatch](https://www.npmjs.com/package/minimatch) glob pattern for CSS files.

### `output`

`string` - output CSS filename.

### `uncss`

`Object` - [UnCSS options](https://github.com/uncss/uncss#usage).

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
