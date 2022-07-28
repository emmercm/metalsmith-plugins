# metalsmith-tracer

[![npm Version](https://badgen.net/npm/v/metalsmith-tracer?icon=npm)](https://www.npmjs.com/package/metalsmith-tracer)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-tracer)](https://www.npmjs.com/package/metalsmith-tracer)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-tracer/badge.svg)](https://snyk.io/test/npm/metalsmith-tracer)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-tracer/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-tracer)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-tracer?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-tracer/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-tracer/purple?icon=github)](https://github.com/emmercm/metalsmith-tracer)
[![License](https://badgen.net/github/license/emmercm/metalsmith-tracer?color=grey)](https://github.com/emmercm/metalsmith-tracer/blob/master/LICENSE)

A tool to automatically trace and measure Metalsmith build time.

The Metalsmith build process has no progress output to indicate how many plugins have been processed and how many more are left. Build pipelines with a lot of plugins can take a long time to finish, and it's very difficult to know which plugins take the most time. This package is a wrapper around Metalsmith that outputs meaningful build progress.

Here is example console output when wrapped around the [metalsmith/startbootstrap-clean-blog](https://github.com/metalsmith/startbootstrap-clean-blog) example:

```text
------- Build process started -------

  4.7ms (unnamed)
 32.5ms (unnamed)
  2.3ms @metalsmith/collections
  0.4ms metalsmith.js
511.9ms @metalsmith/layouts
   1.8s @metalsmith/sass
  0.3ms metalsmith.js

   2.4s Total build time

Build finished
```

## Installation

```bash
npm install --save metalsmith-tracer
```

## JavaScript Usage

This plugin requires ES6 syntax.

`metalsmith-tracer` wraps the root `metalsmith` call:

```javascript
import path from 'path';

import Metalsmith from 'metalsmith';
import tracer     from 'metalsmith-tracer';

tracer(Metalsmith(path.resolve()), {
        // options here
    })
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## Options

### `log` (optional)

Type: `function(string)` Default: `console.log`

The logger function.

## Limitations

- `setImmediate()`

  Plugins that use `setImmediate()` to call their `done` callback will not print their real name due to how `metalsmith-tracer` uses the call stack.

- `metalsmith-if`

  Using `metalsmith-if` will mask the name of the plugin actually being used.

## Changelog

[Changelog](./CHANGELOG.md)
