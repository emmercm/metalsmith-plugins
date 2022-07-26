import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { visit } from 'unist-util-visit';

import async from 'async';
import deepmerge from 'deepmerge';
import vega from 'vega';
import vegaLite from 'vega-lite';

const vegaToSvg = async (vegaBody) => {
  const view = new vega.View(vega.parse(vegaBody), { renderer: 'none' });
  return view.toSVG();
};

const remarkVegaLite = () => async (tree) => {
  await visit(tree, 'code', async (node, idx, parent) => {
    if ((node.lang || '').toLowerCase() !== 'vega-lite') {
      return node;
    }
    if (!node.value) {
      return node;
    }

    const jsonBody = JSON.parse(node.value);
    const vegaBody = vegaLite.compile(jsonBody).spec;
    const newNode = {
      type: 'code',
      lang: 'vega',
      value: JSON.stringify(vegaBody),
    };
    parent.children.splice(idx, 1, newNode);
    return null;
  });
};

const remarkVega = () => async (tree) => {
  const promises = [];
  await visit(tree, 'code', async (node, idx, parent) => {
    if ((node.lang || '').toLowerCase() !== 'vega') {
      return node;
    }
    if (!node.value) {
      return node;
    }

    const jsonBody = JSON.parse(node.value);
    const promise = vegaToSvg(jsonBody).then((svg) => {
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

export default (options) => {
  options = deepmerge({
    markdown: '**/*.md',
  }, options || {});

  return (files, metalsmith, done) => {
    const markdownFiles = metalsmith.match(options.markdown, Object.keys(files));
    async.each(markdownFiles, async (filename) => {
      const file = files[filename];

      const tree = await unified()
        .use(remarkParse)
        .use(remarkVegaLite)
        .use(remarkVega)
        .use(remarkStringify)
        .process(file.contents);

      file.contents = Buffer.from(tree.value);
    }, (err) => {
      done(err);
    });

    // TODO: html files?
  };
};
