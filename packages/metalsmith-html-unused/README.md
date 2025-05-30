# metalsmith-html-unused

[![npm: version](https://img.shields.io/npm/v/metalsmith-html-unused?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-html-unused)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-html-unused?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-html-unused)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-html-unused/badge.svg)](https://snyk.io/test/npm/metalsmith-html-unused)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-html-unused&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-html-unused)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to exclude resources that aren't referenced in HTML files.

Removing unreferenced files such as JavaScript, CSS, images, and documents helps optimize your build output.

## Installation

```shell
npm install --save metalsmith-html-unused
```

## JavaScript Usage

```javascript
import Metalsmith from 'metalsmith';
import unused from 'metalsmith-html-unused';

Metalsmith(__dirname)
    .use(unused({
        pattern: '**/*.@(css|js)'
        // other options here
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

Example: `"**/*.@(css|js|bmp|gif|jpg|jpeg|png|svg|tif|tiff|webp)"`

### `ignore` (optional)

Type: `string`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern for files to exclude from removal. If no pattern is defined, then no files will be ignored.

### `html` (optional)

Type: `string` Default: `"**/*.html"`

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

Both `static/js/fontawesome.all.min.css` and `static/js/popper.js` would be excluded from build output because they aren't referenced, and `static/img/logo.png` would persist because it was ignored. The final file tree would be:

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
