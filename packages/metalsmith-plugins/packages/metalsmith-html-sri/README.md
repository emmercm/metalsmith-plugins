# metalsmith-html-sri

[![npm Version](https://badgen.net/npm/v/metalsmith-html-sri?icon=npm)](https://www.npmjs.com/package/metalsmith-html-sri)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-html-sri)](https://www.npmjs.com/package/metalsmith-html-sri)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-html-sri/badge.svg)](https://snyk.io/test/npm/metalsmith-html-sri)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-html-sri/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-html-sri)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-html-sri?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-html-sri/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-html-sri/purple?icon=github)](https://github.com/emmercm/metalsmith-html-sri)
[![License](https://badgen.net/github/license/emmercm/metalsmith-html-sri?color=grey)](https://github.com/emmercm/metalsmith-html-sri/blob/master/LICENSE)

A Metalsmith plugin to add subresource integrity attributes to HTML.

[Subresource integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) cryptographic hashes are used to ensure that resources such as JavaScript files are delivered without unexpected manipulation.

This plugin works with both local and remote resources.

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

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern to find HTML files.

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

`selector`s are processed by [`cheerio`](https://www.npmjs.com/package/cheerio) which should have near complete parity with [jQuery](https://jquery.com/).

### `ignoreResources` (optional)

Type: `string[]` Default: `[]`

An array of regular expressions of resources to be ignored.

### `algorithm` (optional)

Type: `string|string[]` Default: `sha384`

Either a string or an array of strings of hashing algorithms to use.

Valid hashing algorithms: `sha256`, `sha384`, `sha512`.

## Example HTML

### Example Input

Given a file tree:

```text
.
├── index.html
└── static
    ├── bootstrap.bundle.min.js
    ├── css
    │   └── bootstrap.min.css
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

This plugin will change the contents of `index.html` to something similar to:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    </head>
    <body>
        <script src="/static/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
</html>
```

## Changelog

[Changelog](./CHANGELOG.md)
