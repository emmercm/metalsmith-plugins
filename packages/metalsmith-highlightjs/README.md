# metalsmith-highlightjs

[![npm: version](https://img.shields.io/npm/v/metalsmith-highlightjs?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-highlightjs)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-highlightjs?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-highlightjs)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-highlightjs/badge.svg)](https://snyk.io/test/npm/metalsmith-highlightjs)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-highlightjs&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-highlightjs)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to highlight code blocks with [highlight.js](https://highlightjs.org/).

This plugin replaces every fenced code block in Markdown files with highlighted HTML, optionally with line numbers. It should run before Markdown is rendered to HTML, e.g. before [`@metalsmith/markdown`](https://www.npmjs.com/package/@metalsmith/markdown).

## Installation

```shell
npm install --save metalsmith-highlightjs
```

## JavaScript Usage

```javascript
import Metalsmith from 'metalsmith';
import highlightjs from 'metalsmith-highlightjs';
import markdown from '@metalsmith/markdown';

Metalsmith(__dirname)
    .use(highlightjs({
        // options here
    }))
    .use(markdown())
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## Options

### `markdown` (optional)

Type: `string | string[]` Default: `"**/*.md"`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern, or array of patterns, to find Markdown files. Negated patterns can be used to exclude files.

### `highlightjs` (optional)

Type: `object` Default: `{}`

[highlight.js configuration options](https://highlightjs.readthedocs.io/en/latest/api.html#configure), passed to `hljs.configure()`. For example, `languages` limits which languages auto-detection will choose from:

```javascript
highlightjs({
    highlightjs: {
        languages: ['javascript', 'typescript', 'bash'],
    },
})
```

### `aliases` (optional)

Type: `Record<string, string | string[]>` Default: `{}`

Extra fence languages to register as aliases of a highlight.js language, using `hljs.registerAliases()`. The keys are highlight.js language names, and the values are one or more aliases:

```javascript
highlightjs({
    aliases: {
        bash: ['myshell'],
    },
})
```

The build fails if a key isn't a registered highlight.js language.

### `lineNumbers` (optional)

Type: `boolean | { includeLanguages?: string[], excludeLanguages?: string[] }` Default: `false`

Whether to add line numbers to code blocks:

- `false`: no code block gets line numbers
- `true`: every code block gets line numbers
- an object: a code block gets line numbers if its language is in `includeLanguages` (or `includeLanguages` is unset), and it isn't in `excludeLanguages`

Languages are matched case-insensitively, either as written on the fence or by highlight.js's name for them, so `bash` also matches `sh` code blocks. A code block with no language never matches `includeLanguages`, so it only gets line numbers when `includeLanguages` is unset.

For example, to number every code block except for terminal sessions:

```javascript
highlightjs({
    lineNumbers: {
        excludeLanguages: ['shell', 'console', 'dos', 'bat', 'cmd', 'powershell', 'ps', 'ps1'],
    },
})
```

### `lineWrap` (optional)

Type: `boolean` Default: `false`

Whether to wrap long lines instead of scrolling sideways. Words that are too long for a line (e.g. URLs) are broken as well.

### `theme` (optional)

Type: `{ name: string, filename: string }` Default: none

A [highlight.js theme](https://highlightjs.org/examples) CSS to add to the build:

- `name`: the theme's name (e.g. `github`, `github-dark`, or `base16/dracula`)
- `filename`: where to put the theme's minified CSS in the build

```javascript
highlightjs({
    theme: {
        name: 'github',
        filename: 'css/highlight.css',
    },
})
```

The build fails if the theme doesn't exist, or if a file already exists at `filename`. HTML pages will need to link the CSS file, e.g. `<link rel="stylesheet" href="/css/highlight.css">`.

## Changelog

[Changelog](./CHANGELOG.md)
