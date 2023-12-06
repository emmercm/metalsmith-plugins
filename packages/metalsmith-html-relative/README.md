# metalsmith-html-relative

[![npm: version](https://img.shields.io/npm/v/metalsmith-html-relative?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-html-relative)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-html-relative?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-html-relative)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-html-relative/badge.svg)](https://snyk.io/test/npm/metalsmith-html-relative)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-html-relative&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-html-relative)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to convert to relative paths within HTML.

This will change `href`, `src`, and other tag attributes that reference local files (pages, CSS, JavaScript, images, etc.) to use relative links (e.g. `../static/css/styles.css`) rather than absolute links (e.g. `/static/css/styles.css`). This allows your website to be more portable, it can exist in any kind of subdomain or subdirectory.

## Installation

```shell
npm install --save metalsmith-html-relative
```

## JavaScript Usage

```javascript
import Metalsmith from 'metalsmith';
import relative from 'metalsmith-html-relative';

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

Type: `string` Default: `"**/*.html"`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern to find HTML files.

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

And the contents of `contact/index.html` are:

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

After this plugin is run, the output of `contact/index.html` will be:

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
