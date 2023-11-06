// eslint-disable-next-line import/no-unresolved
import { renderMermaid } from '@mermaid-js/mermaid-cli';
import async from 'async';
import deepmerge from 'deepmerge';
import puppeteer from 'puppeteer';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

const CONSISTENT_CSS = '.mermaid{line-height:1.2;}';

const mermaidToSvg = async (browser, mermaidData, mermaidOptions) => {
  const svgData = (await renderMermaid(browser, mermaidData, 'svg', {
    mermaidConfig: mermaidOptions,
    myCSS: CONSISTENT_CSS,
  })).data.toString();

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  await page.setContent(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body>${svgData}</body></html>`);

  /* istanbul ignore next */
  return page.$eval('svg', (svgElem, css) => {
    /* eslint-env browser */

    // Remove HTML elements that cause problems if their contents are empty
    document.querySelectorAll('title, desc').forEach((elem) => {
      if (elem.textContent.trim() === '') {
        elem.remove();
      }
    });

    svgElem.setAttribute('class', 'mermaid');

    // Keep a consistent line height
    const svgStyle = svgElem.querySelector('style');
    if (svgStyle) {
      svgStyle.textContent += css;
    }

    // Remove attributes that restrict size
    svgElem.removeAttribute('style');
    svgElem.removeAttribute('width');
    svgElem.removeAttribute('height');

    return svgElem.outerHTML
      .replace(/<br>/gi, '<br/>');
  }, CONSISTENT_CSS);
};

const remarkMermaid = (browser, mermaidOptions, debug) => async (tree) => {
  const promises = [];
  await visit(tree, 'code', async (node, idx, parent) => {
    if ((node.lang || '').toLowerCase() !== 'mermaid') {
      return node;
    }

    debug('rendering %s beginning with: %s', node.lang, node.value.slice(0, 100));
    const promise = mermaidToSvg(browser, node.value, mermaidOptions).then((svg) => {
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

  return async (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-mermaid');
    debug('running with options: %O', defaultedOptions);

    const browser = await puppeteer.launch();

    const markdownFiles = metalsmith.match(defaultedOptions.markdown, Object.keys(files));
    async.eachLimit(markdownFiles, 1, async (filename) => {
      const file = files[filename];

      const tree = await unified()
        .use(remarkParse)
        .use(remarkMermaid, browser, defaultedOptions.mermaid, debug)
        .use(remarkStringify)
        .process(file.contents);

      file.contents = Buffer.from(tree.value);
    }, async (err) => {
      await browser.close();
      done(err);
    });

    // TODO: html files?
  };
};
