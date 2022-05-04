# metalsmith-html-glob

[![npm Version](https://badgen.net/npm/v/metalsmith-html-glob?icon=npm)](https://www.npmjs.com/package/metalsmith-html-glob)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-html-glob)](https://www.npmjs.com/package/metalsmith-html-glob)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-html-glob/badge.svg)](https://snyk.io/test/npm/metalsmith-html-glob)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-html-glob/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-html-glob)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-html-glob?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-html-glob/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-html-glob/purple?icon=github)](https://github.com/emmercm/metalsmith-html-glob)
[![License](https://badgen.net/github/license/emmercm/metalsmith-html-glob?color=grey)](https://github.com/emmercm/metalsmith-html-glob/blob/master/LICENSE)

A Metalsmith plugin to apply glob patterns within HTML.

This plugin works by expanding glob patterns in hyperlinks and resource links such as `<script src="**/*.js"></script>`. See below for a complete example.

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

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern to find HTML files.

### `tags` (optional)

Type: `object` Default:

```json
{
    "a": "href",
    "img": ["src", "data-src"],
    "link": "href",
    "script": "src"
}
```

An object of what attributes in what tags to process glob patterns for.

## Example HTML

### Example Input

Given a file tree:

```text
.
├── index.html
└── static
    ├── css
    │   ├── bootstrap.min.css
    │   └── fontawesome.all.min.css
    └── js
        ├── bootstrap.min.js
        └── popper.js
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

This plugin will change the contents of `index.html` to:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="static/css/bootstrap.min.css">
        <link rel="stylesheet" href="static/css/fontawesome.all.min.css">
    </head>
    <body>
        <script src="static/js/bootstrap.min.js"></script>
        <script src="static/js/popper.js"></script>
    </body>
</html>
```

## Changelog

[Changelog](./CHANGELOG.md)
