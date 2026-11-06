import { renderMermaid } from '@mermaid-js/mermaid-cli';
import async from 'async';
import deepmerge from 'deepmerge';
import { readFileSync } from 'fs';
import { Html, Root } from 'mdast';
import { MermaidConfig } from 'mermaid';
import Metalsmith from 'metalsmith';
import { createRequire } from 'module';
import path from 'path';
import puppeteer, { Browser } from 'puppeteer';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { pathToFileURL } from 'url';

export interface Options {
  markdown?: string;
  mermaid?: MermaidConfig;
  iconPacks?: string[];
  iconPacksNamesAndUrls?: Record<string, string>;
}

type IconPacks = Record<string, URL>;

const CONSISTENT_CSS = '.mermaid{line-height:1.2;}';

const mermaidToSvg = async (
  browser: Browser,
  mermaidData: string,
  mermaidOptions: MermaidConfig,
  iconPacks: IconPacks,
) => {
  const mermaidOutput = await renderMermaid(browser, mermaidData, 'svg', {
    mermaidConfig: mermaidOptions,
    myCSS: CONSISTENT_CSS,
    iconPacks,
  });
  const svgData = Buffer.from(mermaidOutput.data).toString();

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  await page.setContent(
    `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body>${svgData}</body></html>`,
  );

  /* istanbul ignore next */
  return page.$eval(
    'svg',
    (svgElem, css) => {
      /* global document */

      // Remove HTML elements that cause problems if their contents are empty
      document.querySelectorAll('title, desc').forEach((elem) => {
        if (!elem.textContent || elem.textContent.trim() === '') {
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

      return svgElem.outerHTML.replace(/<br>/gi, '<br/>');
    },
    CONSISTENT_CSS,
  );
};

const remarkMermaid =
  (
    browser: Browser,
    mermaidOptions: MermaidConfig,
    iconPacks: IconPacks,
    debug: Metalsmith.Debugger,
  ) =>
  async (tree: Root) => {
    const promises: Promise<unknown>[] = [];
    visit(tree, 'code', (node, idx, parent) => {
      if ((node.lang || '').toLowerCase() !== 'mermaid' || idx === undefined || !parent) {
        return;
      }

      debug('rendering %s beginning with: %s', node.lang, node.value.slice(0, 100));
      const promise = mermaidToSvg(browser, node.value, mermaidOptions, iconPacks).then((svg) => {
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

/**
 * Resolve Iconify icon pack npm packages (e.g. `@iconify-json/logos`) from the Metalsmith
 * project's directory, the same way `@mermaid-js/mermaid-cli`'s `--iconPacks` option does.
 */
const resolveIconPackages = (directory: string, packageNames: string[]): IconPacks => {
  const require = createRequire(path.join(directory, 'package.json'));
  return packageNames.reduce((iconPacks, packageName) => {
    const specifier = `${packageName}/icons.json`;

    let iconPackPath: string;
    try {
      iconPackPath = require.resolve(specifier);
    } catch {
      throw new Error(
        `Could not find icon pack ${JSON.stringify(specifier)}. Have you installed it with 'npm install ${packageName}'?`,
      );
    }

    let iconPackJson: unknown;
    try {
      iconPackJson = JSON.parse(readFileSync(iconPackPath).toString());
    } catch {
      throw new Error(`Failed to read icon pack JSON from ${JSON.stringify(iconPackPath)}.`);
    }
    if (
      !iconPackJson ||
      typeof iconPackJson !== 'object' ||
      !('prefix' in iconPackJson) ||
      typeof iconPackJson.prefix !== 'string'
    ) {
      throw new Error(
        `Invalid icon pack JSON from ${JSON.stringify(iconPackPath)}. Missing or invalid "prefix" property.`,
      );
    }

    return { ...iconPacks, [iconPackJson.prefix]: pathToFileURL(iconPackPath) };
  }, {} as IconPacks);
};

const resolveIconPackUrls = (namesAndUrls: Record<string, string>): IconPacks =>
  Object.entries(namesAndUrls).reduce((iconPacks, [name, url]) => {
    let iconPackUrl: URL;
    try {
      iconPackUrl = new URL(url);
    } catch {
      throw new Error(
        `Failed to parse a valid URL for icon pack ${JSON.stringify(name)}: ${JSON.stringify(url)}`,
      );
    }
    return { ...iconPacks, [name]: iconPackUrl };
  }, {} as IconPacks);

export default (options: Options = {}): Metalsmith.Plugin => {
  const defaultedOptions = deepmerge(
    {
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
      iconPacks: [],
      iconPacksNamesAndUrls: {},
    } satisfies Options,
    options || {},
  );

  return async (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-mermaid');
    debug('running with options: %O', defaultedOptions);

    let iconPacks: IconPacks;
    try {
      iconPacks = {
        ...resolveIconPackages(metalsmith.directory(), defaultedOptions.iconPacks),
        ...resolveIconPackUrls(defaultedOptions.iconPacksNamesAndUrls),
      };
    } catch (err) {
      done(err as Error);
      return;
    }
    debug('using icon packs: %O', iconPacks);

    const browser = await puppeteer.launch();

    const markdownFiles = metalsmith.match(defaultedOptions.markdown, Object.keys(files));
    async.eachLimit(
      markdownFiles,
      1,
      async.asyncify(async (filename: string) => {
        const file = files[filename];

        const tree = await unified()
          .use(remarkParse)
          .use(remarkMermaid, browser, defaultedOptions.mermaid, iconPacks, debug)
          .use(remarkStringify)
          .process(file.contents.toString());

        file.contents = Buffer.from(tree.value as string);
      }),
      async (err) => {
        await browser.close();
        done(err ?? undefined);
      },
    );

    // TODO: html files?
  };
};
