# metalsmith-reading-time

[![npm: version](https://img.shields.io/npm/v/metalsmith-reading-time?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-reading-time)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-reading-time?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-reading-time)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-reading-time/badge.svg)](https://snyk.io/test/npm/metalsmith-reading-time)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-reading-time&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-reading-time)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to estimate pages' reading times.

## Installation

```shell
npm install --save metalsmith-reading-time
```

## JavaScript Usage

```javascript
const Metalsmith  = require('metalsmith');
const readingTime = require('metalsmith-reading-time');

Metalsmith(__dirname)
    .use(readingTime({
        // options here
    }))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## File metadata

This plugin adds a metadata field named `readingTime` to each file which can be used with templating engines, such as with [`handlebars`](https://www.npmjs.com/package/handlebars):

```handlebars
Reading time: {{ readingTime }}

The rest of the page content.
```

Reading time will be reported in minutes in the form "# min read" per [`reading-time`](https://www.npmjs.com/package/reading-time).

## Options

### `pattern` (optional)

Type: `string` Default: `"**/*"`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern to find input files.

### `stripHtml` (optional)

Type: `boolean` Default: `true`

Whether to strip HTML tags from content before evaluating the reading time or not.

### `replacements` (optional)

type: `[string | RegExp, string][]` Default: `[]`

A list of tuples fed to `String.replace()` to get rid of meaningless content before evaluating the reading time.

### `readingTime` (optional)

Type: `object` Default: `{}`

An object of [`reading-time`](https://www.npmjs.com/package/reading-time) options, example:

```json
{
  "readingTime": {
    "wordsPerMinute": 200
  }
}
```

## Changelog

[Changelog](./CHANGELOG.md)
