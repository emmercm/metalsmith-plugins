# metalsmith-html-glob

[![npm Version](https://badgen.net/npm/v/metalsmith-html-glob?icon=npm)](https://www.npmjs.com/package/metalsmith-html-glob)
[![node Version](https://badgen.net/npm/node/metalsmith-html-glob)](https://github.com/emmercm/metalsmith-html-glob/blob/master/package.json)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-html-glob)](https://www.npmjs.com/package/metalsmith-html-glob)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-html-glob/badge.svg)](https://snyk.io/test/npm/metalsmith-html-glob)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-html-glob/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-html-glob)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-html-glob?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-html-glob/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-html-glob/purple?icon=github)](https://github.com/emmercm/metalsmith-html-glob)
[![License](https://badgen.net/github/license/emmercm/metalsmith-html-glob?color=grey)](https://github.com/emmercm/metalsmith-html-glob/blob/master/LICENSE)

A Metalsmith plugin to apply glob patterns within HTML.

## Installation

```bash
npm install --save metalsmith-html-glob
```

## JavaScript Usage

```javascript
const Metalsmith = require('metalsmith');
const glob       = require('metalsmith-html-glob');

Metalsmith(__dirname)
    .use(glob({
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

### `tags` (optional)

Type: `object` Default:

```json
{
    "tags": {
        "a": "href",
        "img": ["src", "data-src"],
        "link": "href",
        "script": "src"
    }
}
```

An object of what tags and attributes to glob:

## Example HTML

### Example Input

Given a file tree:

```text
.
├── index.html
└── static
    ├── css
    │   └── bootstrap.min.css
    └── js
        └── bootstrap.bundle.min.js
```

And `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="**/*.css">
    </head>
    <body>
        <script src="**/*.js"></script>
    </body>
</html>
```

### Example Output

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="static/css/bootstrap.min.css">
    </head>
    <body>
        <script src="static/js/bootstrap.bundle.min.js"></script>
    </body>
</html>
```

## Changelog

[Changelog](./CHANGELOG.md)
