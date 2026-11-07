import assertDir from 'assert-dir-equal';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'fs';
import hljs from 'highlight.js';
import type { Html, Root } from 'mdast';
import Metalsmith from 'metalsmith';
import { createRequire } from 'module';
import { join } from 'path';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { afterEach, describe, expect, it } from 'vitest';

import highlightjs, { Options } from '../index.js';

// `configure()` persists on the shared highlight.js instance, and vitest shuffles tests
afterEach(() => {
  hljs.configure({ classPrefix: 'hljs-', languages: undefined });
});

interface Config {
  options?: Options;
  error?: string;
}

const test = (dir: string, config: Config) => {
  describe(dir, () => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    it('should build', async () => {
      try {
        await Metalsmith(`${dir}`)
          // Run the plugin
          .use(highlightjs(config.options))
          // Test the output
          .build();
      } catch (err) {
        if (config.error) {
          expect((err ?? '').toString()).toMatch(config.error);
        } else {
          expect(err).toBeNull();
        }
        return;
      }

      assertDir(`${dir}/build`, `${dir}/expected`);
    });
  });
};

describe('metalsmith-highlightjs', () => {
  const dirs = (p: string) =>
    readdirSync(p)
      .map((f) => join(p, f))
      .filter((f) => statSync(f).isDirectory());
  dirs('test/fixtures').forEach((dir) => {
    const config = existsSync(`${dir}/config.json`)
      ? JSON.parse(readFileSync(`${dir}/config.json`).toString())
      : {};
    test(dir, config);
  });
});

// Run the plugin over a single in-memory Markdown file, and return its output
const processMarkdown = async (markdown: string, options?: Options): Promise<string> => {
  const files = await Metalsmith('test/fixtures/basic')
    .use((files) => {
      Object.keys(files).forEach((filename) => delete files[filename]);
      files['index.md'] = { contents: Buffer.from(markdown) };
    })
    .use(highlightjs(options))
    .process();
  return files['index.md'].contents.toString();
};

const htmlNodes = (markdown: string): Html[] => {
  const tree = unified().use(remarkParse).parse(markdown) as Root;
  const nodes: Html[] = [];
  visit(tree, 'html', (node) => {
    nodes.push(node);
  });
  return nodes;
};

describe('metalsmith-highlightjs (standalone)', () => {
  it('should be reusable across builds', async () => {
    const plugin = highlightjs({ aliases: { json: ['myjson'] } });
    const outputs: string[] = [];
    for (let i = 0; i < 2; i += 1) {
      const files = await Metalsmith('test/fixtures/aliases').use(plugin).process();
      outputs.push(files['index.md'].contents.toString());
    }
    expect(outputs[0]).toContain('class="language-json"');
    expect(outputs[1]).toEqual(outputs[0]);
  });

  it('should normalize CRLF line endings', async () => {
    const files = await Metalsmith('test/fixtures/basic')
      .use((files) => {
        files['index.md'].contents = Buffer.from(
          '```js\r\nconst x = 1;\r\nconst y = 2;\r\n```\r\n',
        );
      })
      .use(highlightjs())
      .process();
    const output = files['index.md'].contents.toString();
    const pre = output.match(/<pre[\s\S]*<\/pre>/);
    expect(pre).not.toBeNull();
    expect(pre?.[0]).not.toContain('\r');
    expect(pre?.[0]).toContain('</span>;\n<span');
  });

  it('should round-trip nested code blocks', async () => {
    const output = await processMarkdown(
      '- item\n\n  ```js\n  a\n\n  b\n  ```\n\n> ```js\n> c\n> ```\n',
    );
    expect(htmlNodes(output).map((node) => node.value)).toEqual([
      '<pre class="hljs" data-lang="js"><code class="language-javascript">a\n\nb</code></pre>',
      '<pre class="hljs" data-lang="js"><code class="language-javascript">c</code></pre>',
    ]);
  });

  it('should only escape what an attribute and the HTML block need', async () => {
    // remark decodes `&quot;`, so the language is `a"b&c'd>e</pre>f`
    const output = await processMarkdown("```a&quot;b&amp;c'd>e</pre>f\nx\n```\n");
    expect(output).toMatch(
      /^<pre class="hljs" data-lang="a&quot;b&amp;c'd>e&lt;\/pre>f"><code class="language-a&quot;b&amp;c'd>e&lt;\/pre>f">/,
    );
    // The `</pre>` in the language didn't end the HTML block early
    expect(htmlNodes(output)).toHaveLength(1);
  });

  it('should prefix line number classes with the configured class prefix', async () => {
    const output = await processMarkdown('```js\na\n```\n', {
      highlightjs: { classPrefix: 'x-' },
      lineNumbers: true,
    });
    expect(output).toContain('<span class="x-ln-numbers"');
    expect(output).toContain('<span class="x-ln-code">');
    expect(output).not.toContain('hljs-ln');
  });

  it('should prefix line number classes with a class prefix configured outside the plugin', async () => {
    hljs.configure({ classPrefix: 'y-' });
    const output = await processMarkdown('```js\na\n```\n', { lineNumbers: true });
    expect(output).toContain('<span class="y-ln-numbers"');
    expect(output).toContain('<span class="y-ln-code">');
  });

  it('should not leave any extra languages registered', async () => {
    const languages = hljs.listLanguages();
    await processMarkdown('```js\na\n```\n', { lineNumbers: true });
    expect(hljs.listLanguages()).toEqual(languages);
  });

  it('should number each line in its own row', async () => {
    const number = (n: number): string =>
      `<span class="hljs-ln-numbers" aria-hidden="true" style="text-align:right;user-select:none;-webkit-user-select:none">${n}</span>`;
    const line = (html: string): string => `<span class="hljs-ln-code">${html}</span>`;

    const output = await processMarkdown('```js\n/* a\nb */\n\nconst x = 1;\n```\n', {
      lineNumbers: true,
    });
    expect(output).toEqual(
      [
        '<pre class="hljs" data-lang="js" style="overflow-x:auto"><code class="language-javascript" style="display:grid;grid-template-columns:auto auto 1fr;column-gap:1em">',
        // One divider down the middle column, spanning every row
        '<span style="grid-area:1/2/span 4;border-left:1px solid"></span>',
        // Spans that cross a line break are closed and re-opened on each line
        `${number(1)}${line('<span class="hljs-comment">/* a</span>')}`,
        `${number(2)}${line('<span class="hljs-comment">b */</span>')}`,
        // Blank lines have a line break as their content, so copying the code keeps them
        `${number(3)}${line('\n')}`,
        `${number(4)}${line('<span class="hljs-keyword">const</span> x = <span class="hljs-number">1</span>;')}`,
        '</code></pre>\n',
      ].join('\n'),
    );
  });

  it('should round-trip numbered code blocks with blank lines', async () => {
    const output = await processMarkdown(
      '```js\na\n\nb\n```\n\n- item\n\n  ```js\n  c\n\n  d\n  ```\n\n> ```js\n> e\n>\n> f\n> ```\n',
      { lineNumbers: true },
    );
    const tree = unified().use(remarkParse).parse(output) as Root;

    const nodes = htmlNodes(output);
    expect(nodes).toHaveLength(3);
    nodes.forEach((node) => {
      expect(node.value).toMatch(/^<pre class="hljs"[\s\S]*<\/pre>$/);
    });

    // No code text leaked out of the HTML blocks into Markdown
    const types: string[] = [];
    visit(tree, (node) => {
      types.push(node.type);
    });
    expect(types).not.toContain('code');
    const paragraphs: string[] = [];
    visit(tree, 'paragraph', (node) => {
      paragraphs.push(node.children.map((child) => ('value' in child ? child.value : '')).join(''));
    });
    expect(paragraphs).toEqual(['item']);
  });

  it('should not set line wrapping by default', async () => {
    const plain = await processMarkdown('```js\na\n```\n');
    const numbered = await processMarkdown('```js\na\n```\n', { lineNumbers: true });
    expect(plain).toEqual(
      '<pre class="hljs" data-lang="js"><code class="language-javascript">a</code></pre>\n',
    );
    expect(numbered).not.toMatch(/white-space|overflow-wrap|minmax/);
  });

  it('should wrap lines without line numbers', async () => {
    const output = await processMarkdown('```js\na\n```\n', { lineWrap: true });
    expect(output).toEqual(
      '<pre class="hljs" data-lang="js" style="white-space:pre-wrap;overflow-wrap:break-word"><code class="language-javascript">a</code></pre>\n',
    );
  });

  it('should wrap lines with line numbers', async () => {
    const output = await processMarkdown('```js\na\n```\n', { lineNumbers: true, lineWrap: true });
    expect(output).toMatch(
      /^<pre class="hljs" data-lang="js" style="white-space:pre-wrap;overflow-wrap:break-word"><code class="language-javascript" style="display:grid;grid-template-columns:auto auto minmax\(0,1fr\);column-gap:1em">\n/,
    );
  });
});

// Run the plugin over an in-memory build with one Markdown file, and return every file
const processFiles = async (options?: Options): Promise<Metalsmith.Files> =>
  Metalsmith('test/fixtures/basic')
    .use((files) => {
      Object.keys(files).forEach((filename) => delete files[filename]);
      files['index.md'] = { contents: Buffer.from('```js\na\n```\n') };
    })
    .use(highlightjs(options))
    .process();

const themeCss = (name: string): string =>
  readFileSync(
    createRequire(import.meta.url).resolve(`highlight.js/styles/${name}.min.css`),
  ).toString();

describe('metalsmith-highlightjs (theme)', () => {
  it('should not add a theme by default', async () => {
    const files = await processFiles();
    expect(Object.keys(files)).toEqual(['index.md']);
  });

  it('should add a theme', async () => {
    const files = await processFiles({ theme: { name: 'github', filename: 'css/highlight.css' } });
    expect(Object.keys(files).sort()).toEqual([join('css', 'highlight.css'), 'index.md']);
    expect(files[join('css', 'highlight.css')].contents.toString()).toEqual(themeCss('github'));
  });

  it('should add a theme from a subdirectory', async () => {
    const files = await processFiles({
      theme: { name: 'base16/dracula', filename: 'dracula.css' },
    });
    expect(files['dracula.css'].contents.toString()).toEqual(themeCss('base16/dracula'));
  });

  it('should fail for an unknown theme', async () => {
    await expect(
      processFiles({ theme: { name: 'not-a-theme', filename: 'a.css' } }),
    ).rejects.toThrow('Unknown highlight.js theme: "not-a-theme"');
  });

  it('should fail for a theme outside of the styles directory', async () => {
    await expect(
      processFiles({ theme: { name: '../lib/index', filename: 'a.css' } }),
    ).rejects.toThrow('Unknown highlight.js theme: "../lib/index"');
  });

  it('should fail when the theme filename already exists', async () => {
    await expect(processFiles({ theme: { name: 'github', filename: 'index.md' } })).rejects.toThrow(
      'Cannot add highlight.js theme, file already exists: "index.md"',
    );
  });
});
