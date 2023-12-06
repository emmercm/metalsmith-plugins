# metalsmith-github-profile

[![npm: version](https://img.shields.io/npm/v/metalsmith-github-profile?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-github-profile)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-github-profile?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-github-profile)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-github-profile/badge.svg)](https://snyk.io/test/npm/metalsmith-github-profile)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-github-profile&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-github-profile)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to fetch GitHub profile information as global metadata.

## Installation

```shell
npm install --save metalsmith-github-profile
```

## JavaScript Usage

```javascript
import Metalsmith from 'metalsmith';
import githubProfile from 'metalsmith-github-profile';

Metalsmith(__dirname)
    .use(githubProfile({
        username: "<your-username-here>"
        // additional options
    }))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## Global metadata

This plugin adds a metadata field named `github.profile` to the global metadata which can be used with templating engines, such as with [`handlebars`](https://www.npmjs.com/package/handlebars):

```handlebars
GitHub username: {{ github.profile.user.login }}

The rest of the page content.
```

The following metadata is available from the GitHub public API:

- [`github.profile.user`](https://docs.github.com/en/rest/reference/users#get-a-user) (`Object`)
- [`github.profile.repos`](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user) (`Object[]`)

## Options

### `username` (required)

Type: `string`

The GitHub username to fetch information for.

### `authorization` (optional)

Type: `{username: string, token: string}`

A GitHub username and OAuth token (including personal access tokens) to use for API requests to get around rate limits.

You can source the token from environment variables like this:

```javascript
githubProfile({
  username: "emmercm",
  authorization: {
    username: "emmercm",
    token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
  }
})
```

### `timeout` (optional)

Type: `number` Default: `5000`

Timeout in milliseconds for API requests to GitHub.

### `retries` (optional)

Type: `number` Default: `3`

Number of times to retry GitHub API requests.

### `retryableStatusCodes` (optional)

Type: `number[]` Default: `[0, 408, 500, 502, 503, 504]`

A list of HTTP status codes to retry GitHub API requests on.

## Changelog

[Changelog](./CHANGELOG.md)
