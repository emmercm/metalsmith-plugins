# metalsmith-html-sri

[![](https://badgen.net/npm/v/metalsmith-html-sri?icon=npm)](https://www.npmjs.com/package/metalsmith-html-sri)
[![](https://badgen.net/npm/dw/metalsmith-html-sri?icon=npm)](https://www.npmjs.com/package/metalsmith-html-sri)

[![](https://badgen.net/badge/emmercm/metalsmith-html-sri/purple?icon=github)](https://github.com/emmercm/metalsmith-html-sri)
[![](https://badgen.net/circleci/github/emmercm/metalsmith-html-sri/master?icon=circleci)](https://github.com/emmercm/metalsmith-html-sri/blob/master/.circleci/config.yml)
[![](https://codecov.io/gh/emmercm/metalsmith-html-sri/branch/master/graph/badge.svg)](https://codecov.io/gh/emmercm/metalsmith-html-sri)
[![](https://badgen.net/github/license/emmercm/metalsmith-html-sri?color=grey)](https://github.com/emmercm/metalsmith-html-sri/blob/master/LICENSE)

A Metalsmith plugin to add subresource integrity attributes to HTML.

## Installation

```bash
npm install metalsmith-html-sri
```

## JavaScript Usage

```javascript
const sri = require('metalsmith-html-sri');

Metalsmith(__dirname)
    .use(sri({
        // options here
    }))
```

## Options

### Default Options

```json
{
    "html": "**/*.html",
    "tags": {
        "link": {
            "attribute": "href",
            "selector": "[rel=\"stylesheet\"]"
        },
        "script": {
            "attribute": "src",
            "selector": ":not([type]), [type!=\"module\"]"
        }
    },
    "algorithm": "sha384"
}
```

### `html`

`string` - minimatch glob pattern for HTML files.

### `tags`

`Object` - what tags to add an integrity attribute to:

```json
{
    "tags": {
        "link": {
            "attribute": "href",
            "selector": "[rel=\"stylesheet\"]"
        },
        "script": {
            "attribute": "src",
            "selector": ":not([type]), [type!=\"module\"]"
        }
    }
}
```

### `algorithm`

`Array|string` - hashing algorithm(s) to use.

## Example HTML

### Example Input

Given a file tree:

```
/
|-- static/
|   |-- css/
|   |   |-- bootstrap.min.css
|   |-- js/
|   |   |-- bootstrap.bundle.min.js
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
