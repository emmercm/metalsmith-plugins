# Changelog

## v2.1.1 / 2024-02-18

- Don't validate `link[href][rel='preconnect']` links as they can 404 (e.g. `https://fonts.googleapis.com`).

## v2.1.0 / 2024-02-15

- Rewrote callback system to eliminate "callback was already called" exceptions.

## v2.0.0 / 2023-11-06

- Converted to TypeScript, including type definitions.

## v1.0.0 / 2023-10-31

- Converted to be an ES6 module.

## v0.6.0 / 2023-10-30

- Added `Metalsmith#debug()` calls.

## v0.5.2 / 2023-02-18

- Fixed validation failures of local files in Windows.

## v0.5.0 / 2023-01-31

- Fixed ignoring of `/` forward slashes in `#` fragment identifiers.

## v0.4.0 / 2022-08-06

- Fixed HTTP(S) timeouts preventing the plugin from stopping.
- Lowered default timeout value from 15s to 10s.

## v0.3.0 / 2022-04-29

- Add a retry mechanism for failed external links.
- Change the default parallelism to be a fixed number.
- Use Metalsmith v2.4's `metalsmith.match()` instead of [`minimatch`](https://www.npmjs.com/package/minimatch).

## v0.2.0 / 2021-11-26

- Support validating `facetime:`/`facetime-audio:`, `mailto:`, `sms:`, and `tel:` links.

## v0.1.2 / 2021-11-24

- Fix the `ignore` option broken in v0.1.0.
- Re-implement an HTTP/HTTPS network cache removed in v0.1.0.
- De-duplicate links before checking.

## v0.1.0 / 2021-11-24

- Print the error next to failed links.
- Use [https://postman-echo.com](https://postman-echo.com) instead of [https://urlecho.appspot.com](https://urlecho.appspot.com) for tests.
- Switch to the WHATWG URL API.
- Significant JSDoc updates.

## v0.0.2 / 2021-02-11

- Fix for checking local `index.html` files.

## v0.0.1 / 2020-12-31

- Initial version.
