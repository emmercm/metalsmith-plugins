# metalsmith-vega

[![npm Version](https://badgen.net/npm/v/meatlsmith-vega?icon=npm)](https://www.npmjs.com/package/meatlsmith-vega)
[![npm Weekly Downloads](https://badgen.net/npm/dw/meatlsmith-vega)](https://www.npmjs.com/package/meatlsmith-vega)

[![Known Vulnerabilities](https://snyk.io/test/npm/meatlsmith-vega/badge.svg)](https://snyk.io/test/npm/meatlsmith-vega)
[![Test Coverage](https://badgen.net/codecov/c/github/emmercm/meatlsmith-vega/main?icon=codecov)](https://codecov.io/gh/emmercm/meatlsmith-vega)
[![Maintainability](https://badgen.net/codeclimate/maintainability/emmercm/meatlsmith-vega?icon=codeclimate)](https://codeclimate.com/github/emmercm/meatlsmith-vega/maintainability)

[![GitHub](https://badgen.net/badge/emmercm/meatlsmith-vega/purple?icon=github)](https://github.com/emmercm/meatlsmith-vega)
[![License](https://badgen.net/github/license/emmercm/meatlsmith-vega?color=grey)](https://github.com/emmercm/meatlsmith-vega/blob/main/LICENSE)

A Metalsmith plugin to render Vega and Vega Lite visualizations in files.

From the official [Vega documentation](https://vega.github.io/vega/):

> Vega is a visualization grammar, a declarative language for creating, saving, and sharing interactive visualization designs. With Vega, you can describe the visual appearance and interactive behavior of a visualization in a JSON format, and generate web-based views using Canvas or SVG.

Vega supports a number of different visualizations including bar charts, line charts, pie charts, scatter plots, distributions, geographic maps, network diagrams, heatmaps, and more. See the examples section below for a few of these.

This plugin works by finding all ```` ```vega ```` and ```` ```vega-lite ```` (more concise and convenient) code blocks in Markdown files, rendering them to SVG, and replacing them with the SVG in-place.

You should run this plugin before any Markdown rendering plugins such as [`@metalsmith/markdown`](https://www.npmjs.com/package/@metalsmith/markdown).

## Installation

```bash
npm install --save meatlsmith-vega
```

## JavaScript Usage

This plugin requires ES6 syntax:

```javascript
import path from 'path';

import Metalsmith from 'metalsmith';
import vega       from 'meatlsmith-vega';

Metalsmith(path.resolve())
    .use(vega({
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

### `vega` (optional)

Type: `object` Default:

```json
{
  "autosize": "none",
  "width": 200,
  "height": 200,
  "background": "white",
  "padding": 5
}
```

An object of [Vega options](https://vega.github.io/vega/docs/config/) that get passed to the `vega.parse()` function.

Example:

```json
{
  "vega": {
    "background": "orange",
    "width": 1280,
    "height": 720,
    "padding": 10
  }
}
```

### `vegaLite` (optional)

Type: `object` Default: `undefined`

If `vegaLite` isn't defined, then the `vega` option (above) will attempt to be used.

An object of [Vega-Lite options](https://vega.github.io/vega-lite/docs/spec.html) that get passed to the `vegaLite.compile()` function.

Example:

```json
{
  "vegaLite": {
    "background": "orange",
    "padding": 10,
    "view": {
      "fill": "yellow",
      "width": 1280,
      "height": 720
    }
  }
}
```

## Examples

Here are a few examples from the [Vega](https://vega.github.io/vega/examples/) and [Vega Lite](https://vega.github.io/vega-lite/examples/) official documentation to get an idea of what types of visualizations are possible.

A line chart with Vega:

`````markdown
```vega
{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "description": "A basic line chart example.",
  "width": 500,
  "height": 200,
  "padding": 5,
  "signals": [
    {"name": "interpolate","value": "linear","bind": {"input": "select","options": ["basis","cardinal","catmull-rom","linear","monotone","natural","step","step-after","step-before"]}}
  ],
  "data": [
    {
      "name": "table",
      "values": [
        {"x": 0,"y": 28,"c": 0},
        {"x": 0,"y": 20,"c": 1},
        {"x": 1,"y": 43,"c": 0},
        {"x": 1,"y": 35,"c": 1},
        {"x": 2,"y": 81,"c": 0},
        {"x": 2,"y": 10,"c": 1},
        {"x": 3,"y": 19,"c": 0},
        {"x": 3,"y": 15,"c": 1},
        {"x": 4,"y": 52,"c": 0},
        {"x": 4,"y": 48,"c": 1},
        {"x": 5,"y": 24,"c": 0},
        {"x": 5,"y": 28,"c": 1},
        {"x": 6,"y": 87,"c": 0},
        {"x": 6,"y": 66,"c": 1},
        {"x": 7,"y": 17,"c": 0},
        {"x": 7,"y": 27,"c": 1},
        {"x": 8,"y": 68,"c": 0},
        {"x": 8,"y": 16,"c": 1},
        {"x": 9,"y": 49,"c": 0},
        {"x": 9,"y": 25,"c": 1}
      ]
    }
  ],
  "scales": [
    {"name": "x","type": "point","range": "width","domain": {"data": "table","field": "x"}},
    {"name": "y","type": "linear","range": "height","nice": true,"zero": true,"domain": {"data": "table","field": "y"}},
    {"name": "color","type": "ordinal","range": "category","domain": {"data": "table","field": "c"}}
  ],
  "axes": [
    {"orient": "bottom","scale": "x"},
    {"orient": "left","scale": "y"}
  ],
  "marks": [
    {
      "type": "group",
      "from": {"facet": {"name": "series","data": "table","groupby": "c"}},
      "marks": [
        {"type": "line","from": {"data": "series"},"encode": {"enter": {"x": {"scale": "x","field": "x"},"y": {"scale": "y","field": "y"},"stroke": {"scale": "color","field": "c"},"strokeWidth": {"value": 2}},"update": {"interpolate": {"signal": "interpolate"},"strokeOpacity": {"value": 1}},"hover": {"strokeOpacity": {"value": 0.5}}}}
      ]
    }
  ]
}
```
`````

A bar chart with Vega Lite:

`````markdown
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple bar chart with embedded data.",
  "data": {
    "values": [
      {"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43},
      {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53},
      {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "a", "type": "nominal", "axis": {"labelAngle": 0}},
    "y": {"field": "b", "type": "quantitative"}
  }
}
```
`````

A scatter plot with Vega Lite:

`````markdown
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing body mass and flipper lengths of penguins.",
  "data": {
    "values": [
      {"Species": "Adelie","Island": "Torgersen","Beak Length (mm)": 39.1,"Beak Depth (mm)": 18.7,"Flipper Length (mm)": 181,"Body Mass (g)": 3750,"Sex": "MALE"},
      {"Species": "Adelie","Island": "Torgersen","Beak Length (mm)": 39.5,"Beak Depth (mm)": 17.4,"Flipper Length (mm)": 186,"Body Mass (g)": 3800,"Sex": "FEMALE"},
      {"Species": "Adelie","Island": "Torgersen","Beak Length (mm)": 40.3,"Beak Depth (mm)": 18,"Flipper Length (mm)": 195,"Body Mass (g)": 3250,"Sex": "FEMALE"},
      {"Species": "Adelie","Island": "Torgersen","Beak Length (mm)": null,"Beak Depth (mm)": null,"Flipper Length (mm)": null,"Body Mass (g)": null,"Sex": null},
      {"Species": "Adelie","Island": "Torgersen","Beak Length (mm)": 36.7,"Beak Depth (mm)": 19.3,"Flipper Length (mm)": 193,"Body Mass (g)": 3450,"Sex": "FEMALE"},
      {"Species": "Adelie","Island": "Biscoe","Beak Length (mm)": 37.8,"Beak Depth (mm)": 18.3,"Flipper Length (mm)": 174,"Body Mass (g)": 3400,"Sex": "FEMALE"},
      {"Species": "Adelie","Island": "Biscoe","Beak Length (mm)": 37.7,"Beak Depth (mm)": 18.7,"Flipper Length (mm)": 180,"Body Mass (g)": 3600,"Sex": "MALE"},
      {"Species": "Adelie","Island": "Biscoe","Beak Length (mm)": 35.9,"Beak Depth (mm)": 19.2,"Flipper Length (mm)": 189,"Body Mass (g)": 3800,"Sex": "FEMALE"},
      {"Species": "Adelie","Island": "Biscoe","Beak Length (mm)": 38.2,"Beak Depth (mm)": 18.1,"Flipper Length (mm)": 185,"Body Mass (g)": 3950,"Sex": "MALE"},
      {"Species": "Adelie","Island": "Biscoe","Beak Length (mm)": 38.8,"Beak Depth (mm)": 17.2,"Flipper Length (mm)": 180,"Body Mass (g)": 3800,"Sex": "MALE"},
      {"Species": "Adelie","Island": "Dream","Beak Length (mm)": 39.5,"Beak Depth (mm)": 16.7,"Flipper Length (mm)": 178,"Body Mass (g)": 3250,"Sex": "FEMALE"},
      {"Species": "Adelie","Island": "Dream","Beak Length (mm)": 37.2,"Beak Depth (mm)": 18.1,"Flipper Length (mm)": 178,"Body Mass (g)": 3900,"Sex": "MALE"},
      {"Species": "Adelie","Island": "Dream","Beak Length (mm)": 39.5,"Beak Depth (mm)": 17.8,"Flipper Length (mm)": 188,"Body Mass (g)": 3300,"Sex": "FEMALE"},
      {"Species": "Adelie","Island": "Dream","Beak Length (mm)": 40.9,"Beak Depth (mm)": 18.9,"Flipper Length (mm)": 184,"Body Mass (g)": 3900,"Sex": "MALE"},
      {"Species": "Adelie","Island": "Dream","Beak Length (mm)": 36.4,"Beak Depth (mm)": 17,"Flipper Length (mm)": 195,"Body Mass (g)": 3325,"Sex": "FEMALE"},
      {"Species": "Chinstrap","Island": "Dream","Beak Length (mm)": 46.5,"Beak Depth (mm)": 17.9,"Flipper Length (mm)": 192,"Body Mass (g)": 3500,"Sex": "FEMALE"},
      {"Species": "Chinstrap","Island": "Dream","Beak Length (mm)": 50,"Beak Depth (mm)": 19.5,"Flipper Length (mm)": 196,"Body Mass (g)": 3900,"Sex": "MALE"},
      {"Species": "Chinstrap","Island": "Dream","Beak Length (mm)": 51.3,"Beak Depth (mm)": 19.2,"Flipper Length (mm)": 193,"Body Mass (g)": 3650,"Sex": "MALE"},
      {"Species": "Chinstrap","Island": "Dream","Beak Length (mm)": 45.4,"Beak Depth (mm)": 18.7,"Flipper Length (mm)": 188,"Body Mass (g)": 3525,"Sex": "FEMALE"},
      {"Species": "Chinstrap","Island": "Dream","Beak Length (mm)": 52.7,"Beak Depth (mm)": 19.8,"Flipper Length (mm)": 197,"Body Mass (g)": 3725,"Sex": "MALE"},
      {"Species": "Gentoo","Island": "Biscoe","Beak Length (mm)": 46.1,"Beak Depth (mm)": 13.2,"Flipper Length (mm)": 211,"Body Mass (g)": 4500,"Sex": "FEMALE"},
      {"Species": "Gentoo","Island": "Biscoe","Beak Length (mm)": 50,"Beak Depth (mm)": 16.3,"Flipper Length (mm)": 230,"Body Mass (g)": 5700,"Sex": "MALE"},
      {"Species": "Gentoo","Island": "Biscoe","Beak Length (mm)": 48.7,"Beak Depth (mm)": 14.1,"Flipper Length (mm)": 210,"Body Mass (g)": 4450,"Sex": "FEMALE"},
      {"Species": "Gentoo","Island": "Biscoe","Beak Length (mm)": 50,"Beak Depth (mm)": 15.2,"Flipper Length (mm)": 218,"Body Mass (g)": 5700,"Sex": "MALE"},
      {"Species": "Gentoo","Island": "Biscoe","Beak Length (mm)": 47.6,"Beak Depth (mm)": 14.5,"Flipper Length (mm)": 215,"Body Mass (g)": 5400,"Sex": "MALE"}
    ]
  },
  "mark": "point",
  "encoding": {
    "x": {"field": "Flipper Length (mm)","type": "quantitative","scale": {"zero": false}},
    "y": {"field": "Body Mass (g)","type": "quantitative","scale": {"zero": false}},
    "color": {"field": "Species","type": "nominal"},
    "shape": {"field": "Species","type": "nominal"}
  }
}
```
`````

## Changelog

[Changelog](./CHANGELOG.md)
