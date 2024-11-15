# Changelog

## v2.1.0 / 2024-11-15

- Replaced the six year old [`sync-request`](https://www.npmjs.com/package/sync-request) with native Node.js `https.get()` calls.
- Added `parallelism` option.

## v2.0.0 / 2023-11-06

- Converted to TypeScript, including type definitions.

## v1.0.0 / 2023-10-31

- Converted to be an ES6 module.

## v0.5.0 / 2023-10-30

- Added `Metalsmith#debug()` calls.

## v0.4.0 / 2022-05-04

- Use Metalsmith v2.4's `metalsmith.match()` instead of [`minimatch`](https://www.npmjs.com/package/minimatch).
- Major README update.

## v0.3.0 / 2021-04-20

- Fixed root-relative resource paths (starting with `` / ``) being excluded.
- Fixed a `` / `` (Unix) vs. `` \ `` (Windows) path separator issue.

## v0.2.1 / 2019-12-29

- Fixed `ignoreResources` not ignoring some resources.
- Fixed `ignoreResources` to correctly use resource URI.

## v0.2.0 / 2019-12-29

- Added `ignoreResources` option.
- Removed ignoring `fonts.googleapis.com` by default.
- Fixed overwriting the existing `integrity` attribute of remote resources.
- Added `'use strict';`.

## v0.1.0 / 2019-05-25

- Added Jest tests.

## v0.0.2 / 2019-05-11

- Fixed option defaulting.
- Fixed linting.
- Created README.
- Created CHANGELOG.
- Updated dependencies:
  - `eslint`

## v0.0.1 / 2019-05-10

- Initial version.
