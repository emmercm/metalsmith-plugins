# metalsmith-html-sri

[![npm Version](https://badgen.net/npm/v/metalsmith-html-sri?icon=npm)](https://www.npmjs.com/package/metalsmith-html-sri)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-html-sri)](https://www.npmjs.com/package/metalsmith-html-sri)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-html-sri/badge.svg)](https://snyk.io/test/npm/metalsmith-html-sri)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-html-sri/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-html-sri)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-html-sri?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-html-sri/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-html-sri/purple?icon=github)](https://github.com/emmercm/metalsmith-html-sri)
[![License](https://badgen.net/github/license/emmercm/metalsmith-html-sri?color=grey)](https://github.com/emmercm/metalsmith-html-sri/blob/master/LICENSE)

A Metalsmith plugin to add subresource integrity attributes to HTML.

## Installation

```bash
npm install --save metalsmith-html-sri
```

## JavaScript Usage

```javascript
const Metalsmith = require('metalsmith');
const sri        = require('metalsmith-html-sri');

Metalsmith(__dirname)
    .use(sri({
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
    "link": {
        "attribute": "href",
        "selector": "[rel=\"stylesheet\"]"
    },
    "script": {
        "attribute": "src",
        "selector": ":not([type]), [type!=\"module\"]"
    }
}
```

An object of what tags to add an integrity attribute to.

### `ignoreResources` (optional)

Type: `string[]` Default: `[]`

An array of regular expressions of resources to be ignored.

### `algorithm` (optional)

Type: `string|string[]` Default: `sha384`

Either a string or an array of strings of hashing algorithms to use.

Valid hashing algorithsm: `sha256`, `sha384`, `sha512`.

## Example HTML

### Example Input

Given a file tree:

```text
.
├── index.html
└── static
    ├── bootstrap.bundle.min.js
    ├── css
    │   └── bootstrap.min.css
    └── js
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

### Example Output

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css" integrity="sha384-...">
    </head>
    <body>
        <script src="/static/js/bootstrap.bundle.min.js" integrity="sha384-..."></script>
    </body>
</html>
```

## Changelog

[Changelog](./CHANGELOG.md)
