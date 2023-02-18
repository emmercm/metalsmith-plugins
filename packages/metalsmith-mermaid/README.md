# metalsmith-mermaid

[![npm Version](https://badgen.net/npm/v/metalsmith-mermaid?icon=npm)](https://www.npmjs.com/package/metalsmith-mermaid)
[![npm Weekly Downloads](https://badgen.net/npm/dw/metalsmith-mermaid)](https://www.npmjs.com/package/metalsmith-mermaid)

[![Known Vulnerabilities](https://snyk.io/test/npm/metalsmith-mermaid/badge.svg)](https://snyk.io/test/npm/metalsmith-mermaid)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/metalsmith-mermaid/main?icon=codecov)](https://codecov.io/gh/emmercm/metalsmith-mermaid)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/metalsmith-mermaid?icon=codeclimate)](https://codeclimate.com/github/emmercm/metalsmith-mermaid/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/metalsmith-mermaid/purple?icon=github)](https://github.com/emmercm/metalsmith-mermaid)
[![License](https://badgen.net/github/license/emmercm/metalsmith-mermaid?color=grey)](https://github.com/emmercm/metalsmith-plugins/blob/main/LICENSE)

A Metalsmith plugin to render Mermaid diagrams in files.

From the official [Mermaid] documentation(https://mermaid-js.github.io/mermaid/#/):

> Mermaid is a JavaScript based diagramming and charting tool that uses Markdown-inspired text definitions and a renderer to create and modify complex diagrams. The main purpose of Mermaid is to help documentation catch up with development.

Mermaid supports a number of different diagrams including flowcharts, sequence diagrams, class diagrams, state diagrams, entity relationship diagrams (ERDs), user journeys, Gantt charts, pie charts, requirements diagrams, and more. See the examples section below for a few of these.

This Metalsmith plugin works by finding all ```` ```mermaid ```` code blocks in Markdown files, rendering them to SVG, and replacing them with the SVG in-place.

You should run this plugin before any Markdown rendering plugins such as [`@metalsmith/markdown`](https://www.npmjs.com/package/@metalsmith/markdown).

## Installation

```bash
npm install --save metalsmith-mermaid
```

## JavaScript Usage

This plugin requires ES6 syntax:

```javascript
import path from 'path';

import Metalsmith from 'metalsmith';
import mermaid    from 'metalsmith-mermaid';

Metalsmith(path.resolve())
    .use(mermaid({
        // options here
    }))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
```

## Options

### `markdown` (optional)

Type: `string` Default: `**/*.md`

A [`micromatch`](https://www.npmjs.com/package/micromatch) glob pattern to find Markdown files.

### `mermaid` (optional)

Type: `object` Default:

```json
{
    "theme": "neutral",
    "er": {
      "diagramPadding": 10
    },
    "flowchart": {
      "diagramPadding": 10
    },
    "sequence": {
      "diagramMarginX": 10,
      "diagramMarginY": 10
    },
    "gantt": {}
}
```

An object of [Mermaid options](https://github.com/mermaid-js/mermaid/blob/develop/docs/Setup.md#configuration).

## Examples

Here are a few examples from the [official documentation](https://mermaid-js.github.io/mermaid/#/) to get an idea of what types of diagrams are possible.

Flowcharts:

`````markdown
```mermaid
flowchart LR
   A -- text --> B -- text2 --> C
```
`````

`````markdown
```mermaid
flowchart TD
    A[Start] --> B{Is it?}
    B -- Yes --> C[OK]
    C --> D[Rethink]
    D --> B
    B -- No ----> E[End]
```
`````

Sequence diagrams:

`````markdown
```mermaid
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
```
`````

`````markdown
```mermaid
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
```
`````

Entity relationship diagrams (ERDs):

`````markdown
```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```
`````

## Changelog

[Changelog](./CHANGELOG.md)
