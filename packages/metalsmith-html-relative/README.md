# metalsmith-html-relative

[![](https://badgen.net/npm/v/metalsmith-html-relative?icon=npm)](https://www.npmjs.com/package/metalsmith-html-relative)
[![](https://badgen.net/npm/dw/metalsmith-html-relative?icon=npm)](https://www.npmjs.com/package/metalsmith-html-relative)

[![](https://badgen.net/badge/emmercm/metalsmith-html-relative/purple?icon=github)](https://github.com/emmercm/metalsmith-html-relative)
[![](https://badgen.net/circleci/github/emmercm/metalsmith-html-relative/master?icon=circleci)](https://github.com/emmercm/metalsmith-html-relative/blob/master/.circleci/config.yml)
[![](https://badgen.net/github/license/emmercm/metalsmith-html-relative?color=grey)](https://github.com/emmercm/metalsmith-html-relative/blob/master/LICENSE)

A Metalsmith plugin to convert to relative paths within HTML.

## Installation

```bash
npm install metalsmith-html-relative
```

## JavaScript Usage

```javascript
const relative = require('metalsmith-html-relative');

Metalsmith(__dirname)
    .use(relative({
        // options here
    }))
```

## Options

### Default Options

```json
{
    "html": "**/*.html",
    "tags": {
        "a": "href",
        "img": "src",
        "link": "href",
        "script": "src",
        "form": "action"
    }
}
```

### `html`

`string` - minimatch glob pattern for HTML files.

### `tags`

`Object` - what tags and attributes to glob:

```json
{
    "tags": {
        "a": "href",
        "img": "src",
        "link": "href",
        "script": "src",
        "form": "action"
    }
}
```

## Example HTML

### Example Input

Given a file tree:

```
/
|-- contact/
|   |-- index.html
|-- static/
|   |-- css/
|   |   |-- styles.css
|   |-- js/
|   |   |-- scripts.js
|-- index.html
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
