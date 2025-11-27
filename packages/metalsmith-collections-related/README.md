# metalsmith-collections-related

[![npm: version](https://img.shields.io/npm/v/metalsmith-collections-related?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-collections-related)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-collections-related?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-collections-related)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-collections-related/badge.svg)](https://snyk.io/test/npm/metalsmith-collections-related)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-collections-related&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-collections-related)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to find related files within collections.

Files are "related" if they share important terms in their contents.

For each file in a collection, [Term Frequency-Inverse Document Frequency (TF-IDF)](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) is used to:

- Find the top `natural.maxTerms` important terms in the file's contents
- Find how much weight those terms have in every other file in the collection
- Filter matches that have at least `natural.minTfIdf` weight
- Sort by descending weight (most "related" first)
- Limit to `maxRelated` number of matches

## Installation

```shell
npm install --save metalsmith-collections-related
```

## JavaScript Usage

Collections need to be processed before related files can be found:

```javascript
import Metalsmith from 'metalsmith';
import collections from 'metalsmith-collections';
import related from 'metalsmith-collections-related';

Metalsmith(__dirname)
    .use(collections({
        // options here
    }))
    .use(related({
        // options here
    }))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## File metadata

This plugin adds a metadata field named `related` to each file in the format:

```json5
{
  "contents": "...",
  "path": "...",
  "related": {
    "[collection name]": [
      { "contents": "...", "path": "..." },
      { "contents": "...", "path": "..." }
      // up to the `maxRelated` number of files
    ],
    "[another collection name]": [
      { "contents": "...", "path": "..." },
      { "contents": "...", "path": "..." }
      // up to the `maxRelated` number of files
    ]
    // up to as many collections as the file is in
  }
}
```

which can be used with templating engines, such as with [`handlebars`](https://www.npmjs.com/package/handlebars):

```handlebars
{{#each related}}
    <a href="{{ path }}">{{ path }}</a>
{{/each}}
```

## Plugin options

### `pattern` (optional)

Type: `string` Default: `"**/*"`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern to find input files.

### `filter` (optional)

Type: `(basePage: Metalsmith.File, relatedPage: Metalsmith.File, idx: number) => boolean`

A function to filter out pages from a "base" page's list of related pages.

### `maxRelated` (optional)

Type: `number` Default: `3`

The number of related files to add to each file's metadata.

### `natural` (optional)

Type: `object` Default:

```json
{
  "minTfIdf": 0,
  "maxTerms": 10
}
```

#### `natural.minTfIdf` (optional)

Type: `number` Default: `0`

The minimum [TF-IDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) measure.

#### `natural.maxTerms` (optional)

Type: `number` Default: `10`

The maximum number of terms to use for [TF-IDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) weighting.

### `sanitizeHtml` (optional)

Type: `object` Default:

```json
{
  "allowedTags": [],
  "allowedAttributes": {},
  "nonTextTags": ["pre"]
}
```

An object of [`sanitize-html`](https://www.npmjs.com/package/sanitize-html) options.

## Metadata options

### `related_ignore` (optional)

Type: `boolean` Default: `false`

If a file has a truthy `related_ignore` metadata value, it will be excluded from other files' related lists. These files will still have a related list calculated for them.

Example:

```markdown
---
related_ignore: true
---
This Markdown file won't appear in any other file's "related" list.
```

## Changelog

[Changelog](./CHANGELOG.md)
