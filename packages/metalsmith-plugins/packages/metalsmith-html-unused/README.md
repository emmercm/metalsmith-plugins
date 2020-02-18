# metalsmith-html-unused

[![npm Version](https://badgen.net/npm/v/metalsmith-html-unused?icon=npm)](https://www.npmjs.com/package/metalsmith-html-unused)
[![node Version](https://badgen.net/npm/node/metalsmith-html-unused)](https://github.com/emmercm/metalsmith-html-unused/blob/master/package.json)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-html-unused)](https://www.npmjs.com/package/metalsmith-html-unused)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-html-unused/badge.svg)](https://snyk.io/test/npm/metalsmith-html-unused)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-html-unused/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-html-unused)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-html-unused?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-html-unused/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-html-unused/purple?icon=github)](https://github.com/emmercm/metalsmith-html-unused)
[![License](https://badgen.net/github/license/emmercm/metalsmith-html-unused?color=grey)](https://github.com/emmercm/metalsmith-html-unused/blob/master/LICENSE)

A Metalsmith plugin to exclude files unused in HTML.

## Installation

```bash
npm install --save metalsmith-html-unused
```

## JavaScript Usage

```javascript
const Metalsmith = require('metalsmith');
const unused     = require('metalsmith-html-unused');

Metalsmith(__dirname)
    .use(unused({
        // options here
    }))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## Options

### `pattern` (required)

Type: `string`

A [minimatch](https://www.npmjs.com/package/minimatch) glob pattern for files to consider for removal.

### `ignore` (optional)

Type: `string`

A [minimatch](https://www.npmjs.com/package/minimatch) glob pattern for files to exclude from removal.

### `html` (optional)

Type: `string` Default: `**/*.html`

A [minimatch](https://www.npmjs.com/package/minimatch) glob pattern to find HTML files.

### `attributes` (optional)

Type: `string[]` Default: `["href", "src", "data-src", "content"]`

An array of HTML attributes that link to files.

## Example

Given a file tree:

```text
.
├── index.html
└── static
    ├── css
    │   └── bootstrap.min.css
    └── js
        ├── bootstrap.bundle.min.js
        └── scrollreveal.min.js
```

And `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css">
    </head>
    <body>
        <script src="/static/js/bootstrap.bundle.min.js"></script>
    </body>
</html>
```

`static/js/scrollreveal.min.js` would be excluded from output because it is not used.

## Changelog

[Changelog](./CHANGELOG.md)
