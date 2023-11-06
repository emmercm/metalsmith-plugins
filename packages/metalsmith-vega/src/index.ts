import async from 'async';
import deepmerge from 'deepmerge';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import vega from 'vega';
import vegaLite from 'vega-lite';
import xml2js from 'xml2js';

const vegaToSvg = async (vegaBody, vegaOptions = {}) => {
  const view = new vega.View(vega.parse(vegaBody, vegaOptions), {
    renderer: 'none',
  });
  const svg = await view.toSVG();

  const xml = await new Promise((resolve, reject) => {
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

const remarkVegaLite = (vegaLiteOptions, debug) => async (tree) => {
  const promises = [];
  visit(tree, 'code', (node, idx, parent) => {
    if ((node.lang || '').toLowerCase() !== 'vega-lite') {
      return node;
    }
    if (!node.value) {
      return node;
    }

    debug('rendering %s beginning with: %s', node.lang, node.value.slice(0, 100));
    let nodeValue;
    try {
      nodeValue = JSON.parse(node.value);
    } catch (e) {
      throw new Error(`Failed to JSON parse '${node.value.replace(/\n +/g, '').trim()}' : ${e.message}`);
    }

    const vegaBody = vegaLite.compile(nodeValue, vegaLiteOptions).spec;

    const promise = vegaToSvg(vegaBody).then((svg) => {
      const newNode = {
        type: 'html',
        value: svg,
      };
      parent.children.splice(idx, 1, newNode);
    });
    promises.push(promise);
    return null;
  });
  await Promise.all(promises);
};

const remarkVega = (vegaOptions, debug) => async (tree) => {
  const promises = [];
  visit(tree, 'code', (node, idx, parent) => {
    if ((node.lang || '').toLowerCase() !== 'vega') {
      return node;
    }
    if (!node.value) {
      return node;
    }

    debug('rendering %s beginning with: %s', node.lang, node.value.slice(0, 100));
    let nodeValue;
    try {
      nodeValue = JSON.parse(node.value);
    } catch (e) {
      throw new Error(`Failed to JSON parse '${node.value.replace(/\n +/g, '').trim()}' : ${e.message}`);
    }

    const promise = vegaToSvg(nodeValue, vegaOptions).then((svg) => {
      const newNode = {
        type: 'html',
        value: svg,
      };
      parent.children.splice(idx, 1, newNode);
    });
    promises.push(promise);
    return null;
  });
  await Promise.all(promises);
};

export default (options = {}) => {
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
  }, options || {});

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-vega');
    debug('running with options: %O', defaultedOptions);

    const markdownFiles = metalsmith.match(defaultedOptions.markdown, Object.keys(files));

    async.each(markdownFiles, async (filename) => {
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
        .use(remarkStringify, defaultedOptions.vega)
        .process(file.contents);

      file.contents = Buffer.from(tree.value);
    }, (err) => {
      done(err);
    });

    // TODO: html files?
  };
};
