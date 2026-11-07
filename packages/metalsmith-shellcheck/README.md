# metalsmith-shellcheck

[![npm: version](https://img.shields.io/npm/v/metalsmith-shellcheck?color=%23cc3534&label=version&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-shellcheck)
[![npm: downloads](https://img.shields.io/npm/dw/metalsmith-shellcheck?color=%23cc3534&logo=npm&logoColor=white)](https://www.npmjs.com/package/metalsmith-shellcheck)

[![Snyk: vulnerabilities](https://snyk.io/test/npm/metalsmith-shellcheck/badge.svg)](https://snyk.io/test/npm/metalsmith-shellcheck)
[![codecov: coverage](https://img.shields.io/codecov/c/github/emmercm/metalsmith-plugins?flag=metalsmith-shellcheck&logo=codecov&logoColor=white)](https://codecov.io/gh/emmercm/metalsmith-shellcheck)
[![license](https://img.shields.io/github/license/emmercm/metalsmith-plugins?color=blue)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to lint shell scripts with [ShellCheck](https://www.shellcheck.net/).

This plugin will raise an exception and stop the build if any shell scripts are found to have ShellCheck violations. All failures across all files are reported together.

## Installation

```shell
npm install --save metalsmith-shellcheck
```

## JavaScript Usage

```javascript
import Metalsmith from 'metalsmith';
import shellcheck from 'metalsmith-shellcheck';

Metalsmith(__dirname)
    .use(shellcheck({
        // options here
    }))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## Options

### `shell` (optional)

Type: `string | string[]` Default: `"**/*.{sh,bash}"`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern, or array of patterns, to find shell script files. Negated patterns can be used to exclude files.

If a file has no shebang and no `# shellcheck shell=` directive, it will be checked as `bash`. Files for shells that ShellCheck doesn't support (e.g. `zsh`, `fish`) are skipped.

### `markdown` (optional)

Type: `string | string[]` Default: `"**/*.md"`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern, or array of patterns, to find Markdown files. Negated patterns can be used to exclude files. A file matching both `shell` and `markdown` is checked as a shell script only.

Fenced code blocks in these files are checked, based on their label:

| Fence label                                    | Checked as |
|------------------------------------------------|------------|
| `bash`, `shell-script`                         | `bash`     |
| `sh`                                           | POSIX `sh` |
| `dash`                                         | `dash`     |
| `ksh`                                          | `ksh`      |
| anything else, including `shell` and `console` | (skipped)  |

Unlabeled blocks, indented code blocks, and empty blocks are skipped. A block that starts with a shebang or has a `# shellcheck shell=` directive is checked as that shell, regardless of its label, and shells that ShellCheck doesn't support (e.g. `zsh`) are skipped.

### `exclude` (optional)

Type: `string[]` Default: `["SC1091", "SC2148"]`

A list of ShellCheck codes to ignore. Providing this option replaces the default list entirely, use `[]` for strict linting.

- `SC1091`: ShellCheck can't follow `source`d files because it runs without access to the filesystem
- `SC2148`: the script is missing a shebang. The plugin already passes `-s` when no shell is declared, so this is rarely reported, and it's excluded in case a shell can't be inferred

Markdown files can exclude more codes for just that file in their front matter, in addition to this list:

```markdown
---
shellcheck:
  exclude:
    - SC2086
---
Page content
```

### `severity` (optional)

Type: `"error" | "warning" | "info" | "style"` Default: `"style"`

The minimum severity of findings to report.

### `parallelism` (optional)

Type: `number` Default: the number of logical CPU cores available

The maximum number of files to process concurrently, and the number of ShellCheck workers to use.

## Changelog

[Changelog](./CHANGELOG.md)
