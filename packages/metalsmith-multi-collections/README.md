# metalsmith-multi-collections

[![npm: version](https://img.shields.io/npm/v/metalsmith-multi-collections?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-multi-collections)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-multi-collections?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-multi-collections)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-multi-collections/badge.svg)](https://snyk.io/test/npm/metalsmith-multi-collections)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-multi-collections&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-multi-collections)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to automatically create collections from files' metadata.

A common use case is grouping blog articles by one or more tags that are defined in frontmatter, for example:

```markdown
---
title: Using metalsmith-multi-collections in your website
tags:
- metalsmith
---
This plugin is helpful!
```

## Installation

```shell
npm install --save metalsmith-multi-collections
```

## JavaScript Usage

```javascript
import Metalsmith from 'metalsmith';
import multiCollections from 'metalsmith-multi-collections';

Metalsmith(__dirname)
    .use(multiCollections.default({
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

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern to find input files to group into collections.

Example: `"blog/**"`

### `key` (required)

Type: `string`

The frontmatter key of where to find values.

Example: `"tags"` for the blog article example:

```markdown
---
title: Using metalsmith-multi-collections in your website
tags:
- metalsmith
---
This plugin is helpful!
```

### `collection` (optional)

Type: `string` Default: `"{val}"`

The resulting collection name. The token `{val}` is replaced with all values found in the `key` option above.

Example: `"blog/tag/{val}"`

### `settings` (required)

Type: `object`

[`@metalsmith/collections`](https://www.npmjs.com/package/@metalsmith/collections) options to use when generating collections.

Example: you may want to provide `sortBy`, `reverse`, `limit`, or other options:

```javascript
{
  settings: {
    sortBy: (a, b) => DateTime.fromJSDate(a.date).toMillis() - DateTime.fromJSDate(b.date).toMillis(),
    reverse: true
  }
}
```

## Changelog

[Changelog](./CHANGELOG.md)
