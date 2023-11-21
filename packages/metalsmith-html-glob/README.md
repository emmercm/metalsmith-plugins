# metalsmith-html-glob

[![npm: version](https://img.shields.io/npm/v/metalsmith-html-glob?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-html-glob)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-html-glob?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-html-glob)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-html-glob/badge.svg)](https://snyk.io/test/npm/metalsmith-html-glob)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-html-glob&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-html-glob)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to apply glob patterns within HTML.

This plugin works by expanding glob patterns in hyperlinks and resource links such as `<script src="**/*.js"></script>`. See below for a complete example.

## Installation

```shell
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

Type: `string` Default: `"**/*.html"`

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
