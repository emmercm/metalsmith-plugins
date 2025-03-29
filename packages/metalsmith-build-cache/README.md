# metalsmith-build-cache

[![npm: version](https://img.shields.io/npm/v/metalsmith-build-cache?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-build-cache)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-build-cache?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-build-cache)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-build-cache/badge.svg)](https://snyk.io/test/npm/metalsmith-build-cache)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-build-cache&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-build-cache)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to cache build results for later runs.

The plugin identifies repeated builds by generating a checksum of all file names and file contents—so if no input files have changed, then it will skip the build process and use the previously generated files.

Caching the build process is particularly useful when breaking up your build into multiple stages such as:

1. Process all CSS (`@metalsmith/sass`, `@metalsmith/postcss`, etc.)
2. Process all JavaScript (`metalsmith-uglify`, etc.)
3. Process all images (`metalsmith-gravatar`, `metalsmith-img-sharp`, etc.)
4. Process all Markdown (`@metalsmith/collections`, `@metalsmith/permalinks`, `@metalsmith/markdown`, etc.)
5. Combine the output of everything above

## Installation

```shell
npm install --save metalsmith-build-cache
```

## JavaScript Usage

`metalsmith-build-cache` wraps the root `metalsmith` call:

```javascript
import Metalsmith from 'metalsmith';
import cache from 'metalsmith-build-cache';

cache.metalsmith(Metalsmith(__dirname), {
        // options here
    })
    // .use() every build plugin
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## Options

### `cachePath` (optional)

Type: `string` Default: `.cache/<destinationDir>`

The logger function.

## Example

As mentioned, this plugin is particularly powerful when breaking up your build into multiple stages. Example:

```javascript
import Metalsmith from 'metalsmith';
import sass from '@metalsmith/sass';
import postcss from '@metalsmith/postcss';
import sharp from 'metalsmith-img-sharp';
import include from 'metalsmith-include-files';

// If no files in the ./css directory change then the cached result can be used!
await cache.metalsmith(Metalsmith(__dirname))
    .source('css')
    .destination('build-css')
    .use(sass({
        style: 'expanded'
    }))
    .use(postcss({
        plugins: {
            autoprefixer: {}
        }
    }))

// If no files in the ./img directory change then the cached result can be used!
await cache.metalsmith(Metalsmith(__dirname))
    .source('img')
    .destination('build-img')
    .use(sharp({
      methods: [
        // Sharp processing steps...
      ]
    }))
    .build();

await Metalsmith(__dirname)
    .source('src')
    .destination('build')
    .use(include({
        directories: {
            'static/css': ['build-css/**'],
            'static/img': ['build-img/**']
        }
    }))
    // All the rest of your plugins...
    .build();
```

## Changelog

[Changelog](./CHANGELOG.md)
