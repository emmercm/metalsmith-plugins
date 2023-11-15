import async from 'async';
import deepmerge from 'deepmerge';
import { Html, Root } from 'mdast';
import Metalsmith from 'metalsmith';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import vega, { Config as VegaConfig } from 'vega';
import vegaLite, { Config as VegaLiteConfig } from 'vega-lite';
// eslint-disable-next-line import/extensions
import { CompileOptions } from 'vega-lite/build/src/compile/compile.js';
// eslint-disable-next-line import/extensions
import { LayoutSizeMixins } from 'vega-lite/build/src/spec/index.js';
import xml2js from 'xml2js';

export interface Options {
  markdown?: string,
  vegaLite?: VegaLiteConfig,
  vega?: VegaConfig & LayoutSizeMixins,
}

const vegaToSvg = async (vegaBody: vega.Spec, vegaOptions: VegaConfig = {}) => {
  const view = new vega.View(vega.parse(vegaBody, vegaOptions), {
    renderer: 'none',
  });
  const svg = await view.toSVG();

  const xml: { svg: { '$': { class?: string } } } = await new Promise((resolve, reject) => {
    xml2js.parseString(svg, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
  xml.svg.$.class = `vega ${xml.svg.$.class || ''}`.trim();

  return (new xml2js.Builder({
    renderOpts: {
      pretty: false,
    },
  })).buildObject(xml);
};

const remarkVegaLite = (
  vegaLiteOptions: CompileOptions,
  debug: Metalsmith.Debugger,
) => async (tree: Root) => {
  const promises: Promise<unknown>[] = [];
  visit(tree, 'code', (node, idx, parent) => {
    if ((node.lang || '').toLowerCase() !== 'vega-lite' || idx === undefined || !parent) {
      return;
    }
    if (!node.value) {
      return;
    }

    debug('rendering %s beginning with: %s', node.lang, node.value.slice(0, 100));
    let nodeValue;
    try {
      nodeValue = JSON.parse(node.value);
    } catch (e) {
      throw new Error(`Failed to JSON parse '${node.value.replace(/\n +/g, '').trim()}' : ${e}`);
    }

    const vegaBody = vegaLite.compile(nodeValue, vegaLiteOptions).spec;

    const promise = vegaToSvg(vegaBody).then((svg) => {
      const newNode: Html = {
        type: 'html',
        value: svg,
      };
      parent.children.splice(idx, 1, newNode);
    });
    promises.push(promise);
  });
  await Promise.all(promises);
};

const remarkVega = (vegaOptions: VegaConfig, debug: Metalsmith.Debugger) => async (tree: Root) => {
  const promises: Promise<unknown>[] = [];
  visit(tree, 'code', (node, idx, parent) => {
    if ((node.lang || '').toLowerCase() !== 'vega' || idx === undefined || !parent) {
      return;
    }
    if (!node.value) {
      return;
    }

    debug('rendering %s beginning with: %s', node.lang, node.value.slice(0, 100));
    let nodeValue;
    try {
      nodeValue = JSON.parse(node.value);
    } catch (e) {
      throw new Error(`Failed to JSON parse '${node.value.replace(/\n +/g, '').trim()}' : ${e}`);
    }

    const promise = vegaToSvg(nodeValue, vegaOptions).then((svg) => {
      const newNode: Html = {
        type: 'html',
        value: svg,
      };
      parent.children.splice(idx, 1, newNode);
    });
    promises.push(promise);
  });
  await Promise.all(promises);
};

export default (options: Options = {}): Metalsmith.Plugin => {
  const defaultedOptions = deepmerge({
    markdown: '**/*.md',
    vega: {
      // ----- general consistency -----
      padding: 1,

      // ----- make vega consistent with vega-lite -----
      // the default size is 0x0 plus padding, so provide a default
      width: 200,
      height: 200,
      // default the background color, other default colors assume a light background
      background: 'white',
    },
  } satisfies Options, options || {});

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-vega');
    debug('running with options: %O', defaultedOptions);

    const markdownFiles = metalsmith.match(defaultedOptions.markdown, Object.keys(files));

    async.each(markdownFiles, async.asyncify(async (filename: string) => {
      const file = files[filename];

      const tree = await unified()
        .use(remarkParse)
        .use(remarkVegaLite, {
          config: defaultedOptions.vegaLite || {
            // vega's top-level options are "view" options, but vega-lite is inconsistent about
            // whether those options belong at the top-level or under the 'view' key. Examples:
            // background, padding, autosize, config, usermeta
            ...defaultedOptions.vega,
            // "Correctly" use vega's top-level view options for 'view'
            view: defaultedOptions.vega,
          },
        }, debug)
        .use(remarkVega, defaultedOptions.vega, debug)
        .use(remarkStringify)
        .process(file.contents);

      file.contents = Buffer.from(tree.value);
    }), (err) => {
      done(err ?? undefined);
    });

    // TODO: html files?
  };
};
