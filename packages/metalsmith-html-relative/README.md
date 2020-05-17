# metalsmith-html-relative

[![npm Version](https://badgen.net/npm/v/metalsmith-html-relative?icon=npm)](https://www.npmjs.com/package/metalsmith-html-relative)
[![node Version](https://badgen.net/npm/node/metalsmith-html-relative)](https://github.com/emmercm/metalsmith-html-relative/blob/master/package.json)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-html-relative)](https://www.npmjs.com/package/metalsmith-html-relative)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-html-relative/badge.svg)](https://snyk.io/test/npm/metalsmith-html-relative)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-html-relative/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-html-relative)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-html-relative?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-html-relative/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-html-relative/purple?icon=github)](https://github.com/emmercm/metalsmith-html-relative)
[![License](https://badgen.net/github/license/emmercm/metalsmith-html-relative?color=grey)](https://github.com/emmercm/metalsmith-html-relative/blob/master/LICENSE)

A Metalsmith plugin to convert to relative paths within HTML.

## Installation

```bash
npm install --save metalsmith-html-relative
```

## JavaScript Usage

```javascript
const Metalsmith = require('metalsmith');
const relative   = require('metalsmith-html-relative');

Metalsmith(__dirname)
    .use(relative({
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
    "a": "href",
    "img": ["src", "data-src"],
    "link": "href",
    "script": "src",
    "form": "action"
}
```

An object of what tags and attributes to process for glob patterns.

## Example HTML

### Example Input

Given a file tree:

```text
.
├── contact
│   └── index.html
├── index.html
└── static
    ├── css
    │   └── styles.css
    └── js
        └── scripts.js
```

And `contact/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="/static/css/styles.css">
    </head>
    <body>
        <script src="/static/js/scripts.js"></script>
    </body>
</html>
```

### Example Output

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="../static/css/styles.css">
    </head>
    <body>
        <script src="../static/js/scripts.js"></script>
    </body>
</html>
```

## Changelog

[Changelog](./CHANGELOG.md)
