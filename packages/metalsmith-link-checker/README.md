# metalsmith-link-checker

[![npm: version](https://img.shields.io/npm/v/metalsmith-link-checker?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-link-checker)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-link-checker?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-link-checker)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-link-checker/badge.svg)](https://snyk.io/test/npm/metalsmith-link-checker)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-link-checker&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-link-checker)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to check for local and remote broken links.

This plugin checks a number of different link types and protocols:

- `http:` and `https:` remote links (with backoff and retry)
- Local links (both relative and absolute)
- `facetime:` and `facetime-audio:` phone numbers and email addresses
- `mailto:` email links
- `sms:` phone numbers
- `tel:` phone numbers

If there are any broken or invalid links found, all of them will be printed to console and the Metalsmith build will stop.

## Installation

```shell
npm install --save metalsmith-link-checker
```

## JavaScript Usage

This plugin will cause a build error if any links are broken:

```javascript
import Metalsmith from 'metalsmith';
import linkChecker from 'metalsmith-link-checker';

Metalsmith(__dirname)
    .use(linkChecker({
        // options here
    }))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## Options

### `html.pattern` (optional)

Type: `string` Default: `"**/*.html"`

A [micromatch](https://www.npmjs.com/package/micromatch) glob pattern to find HTML files.

### `html.tags` (optional)

Type: `object` Default:

```json
{
  "a": "href",
  "img": ["src", "data-src"],
  "link": "href",
  "script": "src"
}
```

An object of what tags and attributes to look for links in.

### `ignore` (optional)

Type: `string[]` Default: `[]`

An array of regular expressions of links to be ignored.

### `timeout` (optional)

Type: `number` Default: `10000`

The network timeout when checking external links in milliseconds.

### `attempts` (optional)

Type: `number` Default: `3`

The number of times to attempt to check external links.

### `userAgent` (optional)

Type: `string` Default: the top result from [top-user-agents](https://www.npmjs.com/package/top-user-agents)

The user agent to use when making network requests.

### `parallelism` (optional)

Type: `number` Default: `100`

The maximum number of async operations at a time.

## Changelog

[Changelog](./CHANGELOG.md)
