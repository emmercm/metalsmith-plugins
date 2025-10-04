# metalsmith-html-favicons

[![npm: version](https://img.shields.io/npm/v/metalsmith-html-favicons?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-html-favicons)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-html-favicons?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-html-favicons)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-html-favicons/badge.svg)](https://snyk.io/test/npm/metalsmith-html-favicons)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-html-favicons&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-html-favicons)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to generate favicons.

## Installation

```shell
npm install --save metalsmith-html-favicons
```

## JavaScript Usage

```javascript
import Metalsmith from 'metalsmith';
import favicons from 'metalsmith-html-favicons';

Metalsmith(__dirname)
    .use(favicons({
        // options here
    }))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## Options

### `icon` (required)

Type: `string`

Filename path or [`micromatch`](https://www.npmjs.com/package/micromatch) pattern to the source icon. The icon must have been included in the Metalsmith build.

### `destination` (optional)

Type: `string` Default: (write to the root directory)

Output directory to write generated icon and manifest files to.

### `html` (optional)

Type: `string` Default: `"**/*.html"`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern to find HTML files.

### `favicons` (optional)

Type: `object` Default (don't generate any manifest files, only favicons):

```json
{
  "icons": {
    "android": false,
    "appleIcon": false,
    "appleStartup": false,
    "favicons": true,
    "windows": false,
    "yandex": false
  }
}
```

An object of [`favicons` options](https://www.npmjs.com/package/favicons).

## Example Output

Given the default `favicons` options which don't generate any manifest files, the following files will be created:

```text
.
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-48x48.png
└── favicon.ico
```

and this will be added to the `<head>` of every HTML page:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
```

## Changelog

[Changelog](./CHANGELOG.md)
