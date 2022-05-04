# metalsmith-html-unused

[![npm Version](https://badgen.net/npm/v/metalsmith-html-unused?icon=npm)](https://www.npmjs.com/package/metalsmith-html-unused)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-html-unused)](https://www.npmjs.com/package/metalsmith-html-unused)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-html-unused/badge.svg)](https://snyk.io/test/npm/metalsmith-html-unused)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-html-unused/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-html-unused)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-html-unused?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-html-unused/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-html-unused/purple?icon=github)](https://github.com/emmercm/metalsmith-html-unused)
[![License](https://badgen.net/github/license/emmercm/metalsmith-html-unused?color=grey)](https://github.com/emmercm/metalsmith-html-unused/blob/master/LICENSE)

A Metalsmith plugin to exclude resources that aren't referenced in HTML files.

Removing unreferenced files such as JavaScript, CSS, images, and documents helps optimize your build output.

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

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern for files to consider for removal.

Example: `**/*.@(css|js|bmp|gif|jpg|jpeg|png|svg|tif|tiff|webp)`.

### `ignore` (optional)

Type: `string`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern for files to exclude from removal. If no pattern is defined then no files will be ignored.

### `html` (optional)

Type: `string` Default: `**/*.html`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern to find HTML files.

### `attributes` (optional)

Type: `string[]` Default: `['href', 'src', 'data-src', 'content']`

An array of HTML attributes that link to files.

## Example

Given the config:

```json
{
    "pattern": "**/*.@(css|js|png)",
    "ignore": "**/logo.png"
}
```

And a file tree:

```text
.
├── index.html
└── static
    ├── css
    │   ├── bootstrap.min.css
    │   └── fontawesome.all.min.css
    ├── img
    │   └── logo.png
    └── js
        ├── bootstrap.min.js
        └── popper.js
```

And `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="static/css/bootstrap.min.css">
    </head>
    <body>
        <script src="static/js/bootstrap.min.js"></script>
    </body>
</html>
```

Both `static/js/fontawesome.all.min.css` and `static/js/popper.js` would be excluded from build output because they are not referenced, and `static/img/logo.png` would persist because it was ignored. The final file tree would be:

```text
.
├── index.html
└── static
    ├── css
    │   └── bootstrap.min.css
    ├── img
    │   └── logo.png
    └── js
        └── bootstrap.min.js
```

## Changelog

[Changelog](./CHANGELOG.md)
