# metalsmith-img-sharp

[![npm: version](https://img.shields.io/npm/v/metalsmith-img-sharp?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-img-sharp)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-img-sharp?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-img-sharp)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-img-sharp/badge.svg)](https://snyk.io/test/npm/metalsmith-img-sharp)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-img-sharp&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-img-sharp)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to process images with [Sharp](https://sharp.pixelplumbing.com/).

_This plugin is designed to be a modernized, grossly more performant, drop-in replacement for the outdated and unmaintained [`metalsmith-sharp` plugin](https://github.com/axe312ger/metalsmith-sharp)._

## Installation

```shell
npm install --save metalsmith-img-sharp
```

## JavaScript Usage

With one object of options:

```javascript
import Metalsmith from 'metalsmith';
import sharp from 'metalsmith-img-sharp';

Metalsmith(__dirname)
    .use(sharp({
        src: '**/*.@(bmp|png)',
        namingPattern: '{dir}{name}.jpg',
        methods: [
          {
            name: 'resize',
            args: [200, 200]
          },
          {
            name: 'jpeg',
            args: { quality: 85 }
          }
        ],
        moveFile: true
        // other options here
    }))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

or with an array of options:

```javascript
import Metalsmith from 'metalsmith';
import sharp from 'metalsmith-img-sharp';

Metalsmith(__dirname)
    .use(sharp([
      {
        src: '**/*.jpg',
        methods: [{
          name: 'resize',
          args: [200, 200]
        }]
        // other options here
      },
      {
        src: '**/*.@(bmp|png)',
        namingPattern: '{dir}{name}.jpg',
        methods: [{
          name: 'jpeg',
          args: { quality: 85 }
        }],
        moveFile: true
        // other options here
      }
    ]))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## Options

### `methods` (required)

Type: `{ name: string, args: unknown}[]`

An array of Sharp methods to apply to each file. See the full [Sharp documentation](https://sharp.pixelplumbing.com/api-operation) on what resizing, compositing, color manipulation, and other functions are available.

`args` can be one of:

- A single value if the Sharp function only takes one argument
  - This can be an object if the Sharp function takes an object
- An array of values if the Sharp function takes multiple arguments
- A method that takes a Sharp metadata object and returns an array of values

Example:

```javascript
sharp({
  src: '**/*.@(bmp|png)',
  methods: [
    {
      // Halve the size of the image
      name: 'resize',
      args: (metadata) => [
        Math.round(metadata.width / 2),
        Math.round(metadata.height / 2),
      ]
    },
    {
      // Flatten a transparent image with a solid background color
      name: 'flatten',
      args: { background: '#ffffff' }
    }
  ]
})
```

### `pattern` (optional)

Type: `string` Default: `**/*.@(avif|bmp|gif|heic|jpg|jpeg|png|svg|webp)`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern for image files to process.

### `namingPattern` (optional)

Type: `string` Default: `{dir}{base}`

The output filename for every processed image. Placeholders available:

- `{dir}`: Directory of file followed by slash
- `{base}`: Full filename with extension
- `{name}`: Filename without extension
- `{ext}`: File extension with leading dot

### `moveFile` (optional)

Type: `boolean` Default: `false`

If a new file was created because `namingPattern`, should the old file be deleted.

### `sharp` (optional)

Type: `object` Default: `{}`

Options to pass to the [Sharp constructor](https://sharp.pixelplumbing.com/api-constructor).

### `parallelism` (optional)

Type: `number` Default: the number of logical CPU cores available

The maximum number of image files to process concurrently.

## Changelog

[Changelog](./CHANGELOG.md)
