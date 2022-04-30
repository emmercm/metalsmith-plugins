# metalsmith-link-checker

[![npm Version](https://badgen.net/npm/v/metalsmith-link-checker?icon=npm)](https://www.npmjs.com/package/metalsmith-link-checker)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-link-checker)](https://www.npmjs.com/package/metalsmith-link-checker)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-link-checker/badge.svg)](https://snyk.io/test/npm/metalsmith-link-checker)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-link-checker/main?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-link-checker)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-link-checker?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-link-checker/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-link-checker/purple?icon=github)](https://github.com/emmercm/metalsmith-link-checker)
[![License](https://badgen.net/github/license/emmercm/metalsmith-link-checker?color=grey)](https://github.com/emmercm/metalsmith-link-checker/blob/main/LICENSE)

A Metalsmith plugin to check for broken links.

This plugin checks a number of different link types and protocols:

- `http:` and `https:` remote links (with backoff and retry)
- Local links (both relative and absolute)
- `facetime:` and `facetime-audio:` phone numbers and email addresses
- `mailto:` email links
- `sms:` phone numbers
- `tel:` phone numbers

If there are any broken or invalid links found, all of them will be printed to console and the Metalsmith build will stop.

## Installation

```bash
npm install --save metalsmith-link-checker
```

## JavaScript Usage

This plugin will cause a build error if any links are broken:

```javascript
const Metalsmith  = require('metalsmith');
const linkChecker = require('metalsmith-link-checker');

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

Type: `string` Default: `**/*.html`

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

Type: `number` Default: `15000`

The network timeout when checking external links, in milliseconds.

### `attempts` (optional)

Type: `number` Default: `3`

The number of times to attempt checking external links.

### `userAgent` (optional)

Type: `string` Default: the top result from [top-user-agents](https://www.npmjs.com/package/top-user-agents)

The user agent to use when making network requests.

### `parallelism` (optional)

Type: `number` Default: `100`

The maximum number of async operations at a time.

## Changelog

[Changelog](./CHANGELOG.md)
