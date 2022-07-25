import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { visit } from 'unist-util-visit';

import async from 'async';
import deepmerge from 'deepmerge';
import puppeteer from 'puppeteer';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const CONSISTENT_CSS = '.mermaid{line-height:1.2;}';

const mermaidToSvg = async (mermaid, options) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  await page.setContent('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body><div id="container"></div></body></html>');
  await page.addScriptTag({
    path: require.resolve('mermaid/dist/mermaid.min.js'),
  });

  const html = await page.$eval('#container', (container, mermaidBody, mermaidOptions, css) => {
    /* eslint-env browser */
    container.textContent = mermaidBody;
    window.mermaid.initialize(mermaidOptions);

    if (css) {
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
    }

    window.mermaid.init(undefined, container);

    // Remove HTML elements that cause problems if their contents are empty
    document.querySelectorAll('title, desc').forEach((elem) => {
      if (elem.textContent.trim() === '') {
        elem.remove();
      }
    });

    const svg = container.querySelector('svg');
    svg.setAttribute('class', 'mermaid');

    // Keep a consistent line height
    svg.querySelector('style').textContent += css;

    // Remove attributes that restrict size
    svg.removeAttribute('style');
    svg.removeAttribute('width');
    svg.removeAttribute('height');

    return svg.outerHTML
      .replace(/<br>/gi, '<br/>');
  }, mermaid, options, CONSISTENT_CSS);
  await browser.close();
  return html;
};

const remarkMermaid = (mermaidOptions = {}) => async (tree) => {
  const promises = [];
  await visit(tree, 'code', async (node, idx, parent) => {
    if ((node.lang || '').toLowerCase() !== 'mermaid') {
      return node;
    }

    const promise = mermaidToSvg(node.value, mermaidOptions).then((svg) => {
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
  options = deepmerge({
    markdown: '**/*.md',
    mermaid: {
      theme: 'neutral',
      er: {
        diagramPadding: 10,
      },
      flowchart: {
        diagramPadding: 10,
      },
      sequence: {
        diagramMarginX: 10,
        diagramMarginY: 10,
      },
      gantt: {},
    },
  }, options || {});

  return (files, metalsmith, done) => {
    const markdownFiles = metalsmith.match(options.markdown, Object.keys(files));
    async.each(markdownFiles, async (filename) => {
      const file = files[filename];

      const tree = await unified()
        .use(remarkParse)
        .use(remarkMermaid, options.mermaid)
        .use(remarkStringify)
        .process(file.contents);

      file.contents = Buffer.from(tree.value);
    }, (err) => {
      done(err);
    });

    // TODO: html files?
  };
};
