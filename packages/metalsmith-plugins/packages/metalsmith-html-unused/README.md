# metalsmith-html-unused

[![](https://badgen.net/npm/v/metalsmith-html-unused?icon=npm)](https://www.npmjs.com/package/metalsmith-html-unused)
[![](https://badgen.net/npm/dw/metalsmith-html-unused?icon=npm)](https://www.npmjs.com/package/metalsmith-html-unused)

[![](https://badgen.net/badge/emmercm/metalsmith-html-unused/purple?icon=github)](https://github.com/emmercm/metalsmith-html-unused)
[![](https://badgen.net/circleci/github/emmercm/metalsmith-html-unused/master?icon=circleci)](https://github.com/emmercm/metalsmith-html-unused/blob/master/.circleci/config.yml)
[![](https://codecov.io/gh/emmercm/metalsmith-html-unused/branch/master/graph/badge.svg)](https://codecov.io/gh/emmercm/metalsmith-html-unused)
[![](https://badgen.net/github/license/emmercm/metalsmith-html-unused?color=grey)](https://github.com/emmercm/metalsmith-html-unused/blob/master/LICENSE)

A Metalsmith plugin to exclude files unused in HTML.

## Installation

```bash
npm install metalsmith-html-unused
```

## JavaScript Usage

```javascript
const Metalsmith = require('metalsmith');
const unused     = require('metalsmith-html-unused');

Metalsmith(__dirname)
    .use(unused({
        // options here
    }))
```

## Options

### Default Options

```json
{
    "html": "**/*.html",
    "attributes": [
        "href",
        "src"
    ],
    "pattern": "",
    "ignore": ""
}
```

### `html`

`string` - [minimatch](https://www.npmjs.com/package/minimatch) glob pattern for HTML files.

### `attributes`

`Array` - HTML attributes that link to files:

```json
{
    "attributes": [
        "href",
        "src"
    ]
}
```

### `pattern`

`string` - [minimatch](https://www.npmjs.com/package/minimatch) glob pattern for files to consider for removal:

```json
{
    "pattern": "**/*.@(css|js)"
}
```

### `ignore`

`string` - [minimatch](https://www.npmjs.com/package/minimatch) glob pattern for files to exclude from removal:

```json
{
    "ignore": "**/*.svg"
}
```

## Example

Given a file tree:

```
/
|-- static/
|   |-- css/
|   |   |-- bootstrap.min.css
|   |-- js/
|   |   |-- bootstrap.bundle.min.js
|   |   |-- scrollreveal.min.js
|-- index.html
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
