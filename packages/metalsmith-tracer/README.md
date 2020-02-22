# metalsmith-tracer

[![npm Version](https://badgen.net/npm/v/metalsmith-tracer?icon=npm)](https://www.npmjs.com/package/metalsmith-tracer)
[![node Version](https://badgen.net/npm/node/metalsmith-tracer)](https://github.com/emmercm/metalsmith-tracer/blob/master/package.json)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-tracer)](https://www.npmjs.com/package/metalsmith-tracer)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-tracer/badge.svg)](https://snyk.io/test/npm/metalsmith-tracer)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-tracer/master?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-tracer)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-tracer?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-tracer/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-tracer/purple?icon=github)](https://github.com/emmercm/metalsmith-tracer)
[![License](https://badgen.net/github/license/emmercm/metalsmith-tracer?color=grey)](https://github.com/emmercm/metalsmith-tracer/blob/master/LICENSE)

A tool to automatically trace and measure Metalsmith build time.

## Installation

```bash
npm install --save metalsmith-tracer
```

## JavaScript Usage

`metalsmith-tracer` wraps the root `metalsmith` call:

```javascript
const Metalsmith = require('metalsmith');
const tracer     = require('metalsmith-tracer');

tracer(Metalsmith(__dirname), {
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

### `setImmediate()`

Plugins that use `setImmediate()` to call their `done` callback will not print their real name due to how `metalsmith-tracer` uses the call stack.

## Changelog

[Changelog](./CHANGELOG.md)
