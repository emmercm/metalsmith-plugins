# metalsmith-collections-related

[![npm Version](https://badgen.net/npm/v/metalsmith-collections-related?icon=npm)](https://www.npmjs.com/package/metalsmith-collections-related)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-collections-related)](https://www.npmjs.com/package/metalsmith-collections-related)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-collections-related/badge.svg)](https://snyk.io/test/npm/metalsmith-collections-related)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-collections-related&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-collections-related)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-collections-related?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-collections-related/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-collections-related/purple?icon=github)](https://github.com/emmercm/metalsmith-collections-related)
[![License](https://badgen.net/github/license/emmercm/metalsmith-collections-related?color=grey)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to find related files within collections.

Files are "related" if they share important terms in their contents.

For each file in a collection, [Term Frequency-Inverse Document Frequency (TF-IDF)](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) is used to:

- Find the top `natural.maxTerms` important terms in the file's contents
- Find how much weight those terms have in every other file in the collection
- Filter matches that have at least `natural.minTfIdf` weight
- Sort by descending weight (most "related" first)
- Limit to `maxRelated` number of matches

## Installation

```bash
npm install --save metalsmith-collections-related
```

## JavaScript Usage

Collections need to be processed before related files can be found:

```javascript
const Metalsmith  = require('metalsmith');
const collections = require('metalsmith-collections');
const related     = require('metalsmith-collections-related');

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

which can be used with templating engines, such as with [Handlebars](https://www.npmjs.com/package/handlebars):

```handlebars
{{#each related}}
    <a href="{{ path }}">{{ path }}</a>
{{/each}}
```

## Options

### `pattern` (optional)

Type: `string` Default: `**/*`

A [micromatch](https://www.npmjs.com/package/micromatch) glob pattern to find input files.

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

The minimum [Term Frequency-Inverse Document Frequency (TF-IDF)](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) measure.

#### `natural.maxTerms` (optional)

Type: `number` Default: `10`

The maximum number of terms to use for [tf-idf](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) weighting.

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

## Changelog

[Changelog](./CHANGELOG.md)
