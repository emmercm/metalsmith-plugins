# metalsmith-link-checker

[![npm Version](https://badgen.net/npm/v/metalsmith-link-checker?icon=npm)](https://www.npmjs.com/package/metalsmith-link-checker)
[![node Version](https://badgen.net/npm/node/metalsmith-link-checker)](https://github.com/emmercm/metalsmith-link-checker/blob/main/package.json)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-link-checker)](https://www.npmjs.com/package/metalsmith-link-checker)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-link-checker/badge.svg)](https://snyk.io/test/npm/metalsmith-link-checker)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-link-checker/main?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-link-checker)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-link-checker?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-link-checker/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-link-checker/purple?icon=github)](https://github.com/emmercm/metalsmith-link-checker)
[![License](https://badgen.net/github/license/emmercm/metalsmith-link-checker?color=grey)](https://github.com/emmercm/metalsmith-link-checker/blob/main/LICENSE)

A Metalsmith plugin to check for broken links.

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

A [minimatch](https://www.npmjs.com/package/minimatch) glob pattern to find HTML files.

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

### `userAgent` (optional)

Type: `string` Default: the top result from [top-user-agents](https://www.npmjs.com/package/top-user-agents)

The user agent to use when making network requests.

### `parallelism` (optional)

Type: `number` Default: the number of logical CPU cores available x4

The maximum number of async operations at a time.

## Changelog

[Changelog](./CHANGELOG.md)
