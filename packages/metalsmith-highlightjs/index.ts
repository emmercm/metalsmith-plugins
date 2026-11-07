import deepmerge from 'deepmerge';
import fs from 'fs';
import hljs, { HLJSOptions, Language } from 'highlight.js';
import type { Code, Root } from 'mdast';
import Metalsmith from 'metalsmith';
import { createRequire } from 'module';
import path from 'path';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

export interface Options {
  markdown?: string | string[];
  highlightjs?: Partial<HLJSOptions>;
  aliases?: Record<string, string | string[]>;
  lineNumbers?:
    | boolean
    | {
        includeLanguages?: string[];
        excludeLanguages?: string[];
      };
  lineWrap?: boolean;
  theme?: {
    name: string;
    filename: string;
  };
}

// Escape text for use inside a double-quoted HTML attribute value, escaping only what's necessary.
const escapeAttribute = (text: string): string =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Map each registered language to the name it was registered under, so aliases such as `sh` can
// be resolved to their canonical name such as `bash`
const getHighlightjsLanguages = (): Map<Language, string> => {
  const languages = new Map<Language, string>();
  hljs.listLanguages().forEach((name) => {
    const language = hljs.getLanguage(name);
    if (language) {
      languages.set(language, name);
    }
  });
  return languages;
};

// Read one of highlight.js's minified themes, e.g. `github` or `base16/dracula`, from the same copy
// of highlight.js that does the highlighting
const readTheme = (name: string): Buffer => {
  const require = createRequire(import.meta.url);
  const stylesDirectory = path.dirname(require.resolve('highlight.js/styles/default.min.css'));
  let themePath: string | undefined;
  try {
    themePath = require.resolve(`highlight.js/styles/${name}.min.css`);
  } catch {
    // Handled below
  }
  // Only files in the styles directory are themes, not other files a relative name could reach
  if (!themePath || path.relative(stylesDirectory, themePath).startsWith('..')) {
    throw new Error(`Unknown highlight.js theme: "${name}"`);
  }
  return fs.readFileSync(themePath);
};

// Get the class prefix highlight.js is configured with (`hljs-` by default), which it has no public
// getter for, by highlighting with a temporary language that has a single scope
const getClassPrefix = (): string => {
  const languageName = 'metalsmith-highlightjs-class-prefix';
  hljs.registerLanguage(languageName, () => ({ contains: [{ scope: 'x', match: /x/ }] }));
  try {
    const { value } = hljs.highlight('x', { language: languageName });
    return value.match(/class="([^"]*)x"/)?.[1] ?? 'hljs-';
  } finally {
    hljs.unregisterLanguage(languageName);
  }
};

type LineNumbers = Required<Options>['lineNumbers'];

// The minimum inline CSS for a grid of one row per line, with no stylesheet: a number, a divider,
// and then the code. A wrapped line makes its whole row taller, so the numbers stay beside their
// lines. The spacing and the divider are set once for the whole grid, rather than on every line

// Opt-in only: without it, `<pre>`'s default (or the site's CSS) decides whether lines wrap
const WRAP_STYLE = 'white-space:pre-wrap;overflow-wrap:break-word';
// Unwrapped long lines scroll inside the block rather than widening the page
const SCROLL_STYLE = 'overflow-x:auto';
// When wrapping, the code column can't grow past the block for a long word, so the word breaks
const gridStyle = (lineWrap: boolean): string =>
  `display:grid;grid-template-columns:auto auto ${lineWrap ? 'minmax(0,1fr)' : '1fr'};column-gap:1em`;
const NUMBER_STYLE = 'text-align:right;user-select:none;-webkit-user-select:none';
// One empty element down the middle column, through every row
const dividerStyle = (rows: number): string => `grid-area:1/2/span ${rows};border-left:1px solid`;

// Whether a line of highlighted HTML has no text
const isBlank = (line: string): boolean => line.replace(/<[^>]*>/g, '') === '';

// Split highlighted HTML into lines. Tags that are open at a line break are closed at the end of
// the line and re-opened at the start of the next, so each line is well-formed on its own
const splitLines = (html: string): string[] => {
  const lines: string[] = [];
  const open: { tag: string; name: string }[] = [];
  const close = (): string =>
    [...open]
      .reverse()
      .map(({ name }) => `</${name}>`)
      .join('');

  let line = '';
  [...html.matchAll(/<([a-z][a-z0-9]*)\b[^>]*>|<\/[a-z][a-z0-9]*>|\n|[^<\n]+/gi)].forEach(
    ([token, name]) => {
      if (token === '\n') {
        lines.push(line + close());
        line = open.map(({ tag }) => tag).join('');
        return;
      }
      if (name) {
        open.push({ tag: token, name });
      } else if (token.startsWith('</')) {
        open.pop();
      }
      line += token;
    },
  );
  lines.push(line);

  // A trailing newline doesn't start a new line
  if (lines.length > 1 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  }
  return lines;
};

const isLineNumbered = (
  lang: string | null | undefined,
  canonical: string | undefined,
  lineNumbers: LineNumbers,
): boolean => {
  if (typeof lineNumbers === 'boolean') {
    return lineNumbers;
  }
  const names = [lang, canonical]
    .filter((name): name is string => !!name)
    .map((name) => name.toLowerCase());
  const matches = (languages: string[]): boolean =>
    languages.some((language) => names.includes(language.toLowerCase()));
  return (
    (lineNumbers.includeLanguages === undefined || matches(lineNumbers.includeLanguages)) &&
    !matches(lineNumbers.excludeLanguages ?? [])
  );
};

const renderCode = (
  code: string,
  lang: string | null | undefined,
  highlightjsLanguages: Map<Language, string>,
  lineNumbers: LineNumbers,
  lineWrap: boolean,
  classPrefix: string,
): string => {
  // Strip Windows line feeds
  const value = code.replace(/\r\n/g, '\n');

  const language = lang ? hljs.getLanguage(lang) : undefined;
  const highlighted = language
    ? hljs.highlight(value, { language: lang as string, ignoreIllegals: true }).value
    : hljs.highlightAuto(value).value;

  const languageName = language ? highlightjsLanguages.get(language) : undefined;
  const preAttributes = lang ? ` data-lang="${escapeAttribute(lang)}"` : '';
  const codeAttributes = lang ? ` class="language-${escapeAttribute(languageName ?? lang)}"` : '';

  if (!isLineNumbered(lang, languageName, lineNumbers)) {
    const style = lineWrap ? ` style="${WRAP_STYLE}"` : '';
    return `<pre class="hljs"${preAttributes}${style}><code${codeAttributes}>${highlighted}</code></pre>`;
  }

  const lines = splitLines(highlighted);
  const rows = lines.map(
    (line, i) =>
      // An empty row would be left out when the code is copied, so blank lines get a line break
      `<span class="${classPrefix}ln-numbers" aria-hidden="true" style="${NUMBER_STYLE}">${i + 1}</span><span class="${classPrefix}ln-code">${isBlank(line) ? `${line}\n` : line}</span>`,
  );
  // Starting with `<pre` makes the whole block one CommonMark HTML block, which only ends at
  // `</pre>`, and every line break is followed by a row, so there are never blank lines in it
  return [
    `<pre class="hljs"${preAttributes} style="${lineWrap ? WRAP_STYLE : SCROLL_STYLE}"><code${codeAttributes} style="${gridStyle(lineWrap)}">`,
    `<span style="${dividerStyle(lines.length)}"></span>`,
    ...rows,
    '</code></pre>',
  ].join('\n');
};

// Replace each code block in the original source, so the rest of the Markdown is left exactly as
// written (re-stringifying the whole file would reformat syntax this parser doesn't know, e.g. GFM)
const highlightMarkdown = (
  contents: string,
  highlightjsLanguages: Map<Language, string>,
  lineNumbers: LineNumbers,
  lineWrap: boolean,
  classPrefix: string,
  debug: Metalsmith.Debugger,
): string => {
  const tree = unified().use(remarkParse).parse(contents) as Root;

  const blocks: Code[] = [];
  visit(tree, 'code', (node) => {
    if (node.position?.start.offset !== undefined && node.position.end.offset !== undefined) {
      blocks.push(node);
    }
  });

  let result = contents;
  // The offsets are character ranges in the original `contents`, and each replacement changes the
  // length of everything after it. Replacing from the last block to the first only ever changes
  // text after the blocks that are still to be replaced, so their offsets stay valid
  blocks.reverse().forEach((node) => {
    debug('highlighting code block with language: %s', node.lang);
    const start = node.position?.start.offset as number;
    const end = node.position?.end.offset as number;

    // Continue any container (list item, blockquote) the code block is in, e.g. `> - ` → `>   `
    const lineStart = contents.lastIndexOf('\n', start - 1) + 1;
    const prefix = contents.slice(lineStart, start).replace(/[^>\s]/g, ' ');

    const html = renderCode(
      node.value,
      node.lang,
      highlightjsLanguages,
      lineNumbers,
      lineWrap,
      classPrefix,
    ).replace(/\n/g, `\n${prefix}`);
    result = result.slice(0, start) + html + result.slice(end);
  });
  return result;
};

export default (options: Options = {}): Metalsmith.Plugin => {
  const defaultedOptions = deepmerge.all<Required<Options>>(
    [
      {
        markdown: '**/*.md',
        highlightjs: {},
        aliases: {},
        lineNumbers: false,
        lineWrap: false,
      },
      options || {},
    ],
    { arrayMerge: (destinationArray, sourceArray) => sourceArray },
  );

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-highlightjs');
    debug('running with options: %O', defaultedOptions);

    try {
      // WARN: These modify the shared/global highlight.js instance
      hljs.configure(defaultedOptions.highlightjs);
      Object.entries(defaultedOptions.aliases).forEach(([languageName, aliases]) => {
        if (!hljs.listLanguages().includes(languageName)) {
          throw new Error(
            `Cannot register aliases for unknown highlight.js language: "${languageName}"`,
          );
        }
        hljs.registerAliases(aliases, { languageName });
      });

      if (defaultedOptions.theme) {
        const filename = path.normalize(defaultedOptions.theme.filename);
        if (files[filename]) {
          throw new Error(`Cannot add highlight.js theme, file already exists: "${filename}"`);
        }
        debug('adding theme %s as: %s', defaultedOptions.theme.name, filename);
        files[filename] = { contents: readTheme(defaultedOptions.theme.name) };
      }

      const highlightjsLanguages = getHighlightjsLanguages();
      const classPrefix = getClassPrefix();

      metalsmith.match(defaultedOptions.markdown, Object.keys(files)).forEach((filename) => {
        debug('processing file: %s', filename);
        const file = files[filename];
        file.contents = Buffer.from(
          highlightMarkdown(
            file.contents.toString(),
            highlightjsLanguages,
            defaultedOptions.lineNumbers,
            defaultedOptions.lineWrap,
            classPrefix,
            debug,
          ),
        );
      });
    } catch (err) {
      done(err as Error);
      return;
    }

    done();
  };
};
