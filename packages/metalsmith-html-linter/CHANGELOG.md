# Changelog

## v2.0.0 / 2023-11-06

- Converted to TypeScript, including type definitions.

## v1.0.0 / 2023-10-31

- Converted to be an ES6 module.

## v0.9.0 / 2023-10-30

- Added `Metalsmith#debug()` calls.

## v0.8.0 / 2022-04-22

- Replace the abandoned [`htmllint`](https://www.npmjs.com/package/htmllint) with [`linthtml`](https://www.npmjs.com/package/@linthtml/linthtml).

## v0.7.0 / 2022-04-22

- Changed `ignoreTags` to remove outer HTML rather than inner HTML (reverts v0.3.1).
- Ignore `<svg>` tags by default.

## v0.6.0 / 2022-02-23

- Use Metalsmith v2.4's `metalsmith.match()` instead of [`minimatch`](https://www.npmjs.com/package/minimatch).
- README update.

## v0.5.0 / 2021-08-23

- Implemented the suggested workaround for [htmllint/htmllint#267](https://github.com/htmllint/htmllint/issues/267).

## v0.4.0 / 2021-05-08

- Removed `width` and `height` from `attr-bans` (E001) due to Google Lighthouse suggestions.

## v0.3.1 / 2020-06-30

- Changed `ignoreTags` to remove inner HTML rather than outer HTML.

## v0.3.0 / 2020-06-12

- Added ability to specify `ignoreTags` of selectors to remove before linting.
- Made the error output more human-readable with [`@babel/code-frame`](https://www.npmjs.com/package/@babel/code-frame).

## v0.2.0 / 2020-05-09

- Added ability to specify `parallelism`, defaulting to the number of logical CPU cores available.

## v0.1.0 / 2020-02-11

- Added more custom defaults to fix rules.
- Fixed options array merging.
- Fixed file contents decoding.

## v0.0.1 / 2020-02-10

- Initial version.
