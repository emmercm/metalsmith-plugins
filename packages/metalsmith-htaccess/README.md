# metalsmith-htaccess

[![npm: version](https://img.shields.io/npm/v/metalsmith-htaccess?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-htaccess)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-htaccess?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-htaccess)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-htaccess/badge.svg)](https://snyk.io/test/npm/metalsmith-htaccess)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-htaccess&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-htaccess)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to create an Apache HTTP Server `.htaccess` configuration file.

## Installation

```shell
npm install --save metalsmith-htaccess
```

## JavaScript Usage

```javascript
import Metalsmith from 'metalsmith';
import htaccess from 'metalsmith-htaccess';

Metalsmith(__dirname)
    .use(htaccess({
        // options here
    }))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## Options

### Core

#### `core.defaultCharset` (optional)

Type: `string` Default: `"utf-8"`

Sets [`AddDefaultCharset`](https://httpd.apache.org/docs/current/mod/core.html#adddefaultcharset).

#### `core.serverSignature` (optional)

Type: `boolean` Default: `false`

Enables or disables [`ServerSignature`](https://httpd.apache.org/docs/current/mod/core.html#serversignature).

#### `core.errorDocuments` (optional)

Type: `object`

An object of [`ErrorDocument`](https://httpd.apache.org/docs/current/mod/core.html#errordocument)s, example:

```json
{
  "core": {
    "errorDocuments": {
      "401": "/error_pages/401.html",
      "404": "/error_pages/404.html",
      "500": "/error_pages/500.html"
    }
  }
}
```

### Core Options

#### `core.options.followSymlinks` (optional)

Type: `boolean` Default: `true`

Enables or disables [`FollowSymlinks`](https://httpd.apache.org/docs/current/mod/core.html#options).

#### `core.options.indexes` (optional)

Type: `boolean` Default: `false`

Enables or disables [`Indexes`](https://httpd.apache.org/docs/current/mod/core.html#options).

#### `core.options.multiViews` (optional)

Type: `boolean` Default: `false`

Enables or disables [`MultiViews`](https://httpd.apache.org/docs/current/mod/core.html#options).

### Deflate

#### `deflate.mimeTypes` (optional)

Type: `string[]` Default: `["image/svg+xml", "application/javascript", "application/rss+xml", "application/vnd.ms-fontobject", "application/x-font", "application/x-font-opentype", "application/x-font-otf", "application/x-font-truetype", "application/x-font-ttf", "application/x-javascript", "application/xhtml+xml", "application/xml", "font/opentype", "font/otf", "font/ttf", "image/x-icon", "text/css", "text/html", "text/javascript", "text/plain", "text/xml"]`

A list of MIME types to [`AddOutputFilterByType DEFLATE`](https://httpd.apache.org/docs/current/mod/mod_deflate.html#enable).

### Dir

#### `dir.index` (optional)

Type: `string` Default: `"index.html index.htm index.php index.cgi"`

Set [`DirectoryIndex`](https://httpd.apache.org/docs/current/mod/mod_dir.html#directoryindex).

### Environment

#### `environment.serverAdminEmail` (optional)

Type: `string`

Set [`SetEnv SERVER_ADMIN`](https://httpd.apache.org/docs/current/mod/mod_env.html#setenv).

#### `environment.timezone` (optional)

Type: `string`

Set [`SetEnv TZ`](https://httpd.apache.org/docs/current/mod/mod_env.html#setenv).

### Expires

#### `expires.default` (optional)

Type: `string` Default: `"access plus 2 days"`

Set [`ExpiresDefault`](https://httpd.apache.org/docs/current/mod/mod_expires.html#expiresdefault).

#### `expires.types` (optional)

Type: `object` Default:

```json
{
    "image/jpg": "access plus 1 month",
    "image/svg+xml": "access 1 month",
    "image/gif": "access plus 1 month",
    "image/jpeg": "access plus 1 month",
    "image/png": "access plus 1 month",
    "text/css": "access plus 1 month",
    "text/javascript": "access plus 1 month",
    "application/javascript": "access plus 1 month",
    "application/x-shockwave-flash": "access plus 1 month",
    "image/ico": "access plus 1 month",
    "image/x-icon": "access plus 1 month",
    "text/html": "access plus 600 seconds"
}
```

Set [`ExpiresByType`](https://httpd.apache.org/docs/current/mod/mod_expires.html#expiresbytype).

### Gzip

#### `gzip.canNegotiate` (optional)

Type: `boolean`

Enables or disables `mod_gzip_can_negotiate`.

#### `gzip.dechunk` (optional)

Type: `boolean`

Enables or disables `mod_gzip_dechunk`.

#### `gzip.include` (optional)

Type: `string[]`

A list of `mod_gzip_item_include`.

#### `gzip.exclude` (optional)

Type: `string[]`

A list of `mod_gzip_item_exclude`.

### Headers

#### `headers.etag` (optional)

Type: `boolean` Default: `false`

Enables or disables [ETag header](https://httpd.apache.org/docs/current/mod/core.html#fileetag).

### MIME

#### `mime.defaultLanguage` (optional)

Type: `string`

Sets [`DefaultLanguage`](https://httpd.apache.org/docs/current/mod/mod_mime.html#defaultlanguage).

#### `mime.languages` (optional)

Type: `object`

An object of [`AddLanguage`](https://httpd.apache.org/docs/current/mod/mod_mime.html#addlanguage)s, example:

```json
{
    "mime": {
        "languages": {
            "en": "en",
            "en-gb": ".en",
            "en-us": ".en"
        }
    }
}
```

#### `mime.charsets` (optional)

Type: `object`

An object of [`AddCharset`](https://httpd.apache.org/docs/current/mod/mod_mime.html#addcharset)s, example:

```json
{
    "mime": {
        "charsets": {
            "EUC-JP": ".euc",
            "ISO-2022-JP": ".jis",
            "SHIFT_JIS": ".sjis"
        }
    }
}
```

#### `mime.types` (optional)

Type: `object`

An object of [`AddType`](https://httpd.apache.org/docs/current/mod/mod_mime.html#addtype)s, example:

```json
{
    "mime": {
        "types": {
            "image/gif": ".gif",
            "image/jpeg": "jpeg jpg jpe"
        }
    }
}
```

### Rewrite

#### `rewrite.404` (optional)

Type: `string`

Sets the [404 redirect page](https://httpd.apache.org/docs/current/mod/mod_rewrite.html).

#### `rewrite.options` (optional)

Type: `string` Default: `"Inherit"`

Sets [`RewriteOptions`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions).

#### `rewrite.allowedMethods` (optional)

Type: `string[]`

A list of [allowed HTTP methods](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions).

#### `rewrite.httpsRedirect` (optional)

Type: `boolean`

Enable [HTTPS redirection](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriteoptions).

### Spelling

#### `spelling.check` (optional)

Type: `boolean`

Enables or disables [`CheckSpelling`](https://httpd.apache.org/docs/current/mod/mod_speling.html#checkspelling).

## Changelog

[Changelog](./CHANGELOG.md)
