import { codeFrameColumns } from '@babel/code-frame';
import { createShellCheck, SHELLCHECK_VERSION, wasmUrl } from '@vscode-shellcheck/shellcheck-wasm';
import async from 'async';
import deepmerge from 'deepmerge';
import fs from 'fs';
import Metalsmith from 'metalsmith';
import { createRequire } from 'module';
import os from 'os';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { pathToFileURL } from 'url';
import { Worker } from 'worker_threads';

export interface Options {
  shell?: string | string[];
  markdown?: string | string[];
  exclude?: string[];
  severity?: 'error' | 'warning' | 'info' | 'style';
  parallelism?: number;
}

interface ShellCheckComment {
  line: number;
  endLine: number;
  column: number;
  endColumn: number;
  level: string;
  code: number;
  message: string;
}

// SC1071: ShellCheck only supports sh/bash/dash/ksh
// SC1103: this shell type is unknown
const UNSUPPORTED_SHELL_CODES = [1071, 1103];

interface ShellCheckInstance {
  shellcheck: ReturnType<typeof createShellCheck>;
  inFlight: number;
}

class ShellCheckWorkerPool {
  private readonly workerUrl: URL;
  private readonly instances: ShellCheckInstance[] = [];
  // Read and compile the WASM lazily, only once the first instance is needed
  private module: Promise<WebAssembly.Module> | undefined;

  constructor(
    private readonly size: number,
    private readonly options: Required<Options>,
  ) {
    const workerEntry = pathToFileURL(
      createRequire(import.meta.url).resolve('@vscode-shellcheck/shellcheck-wasm/worker'),
    ).href;
    const workerCode = `import { parentPort } from 'node:worker_threads';
import { startWorker } from ${JSON.stringify(workerEntry)};
startWorker({ postMessage: (m) => parentPort.postMessage(m), onMessage: (l) => parentPort.on('message', l) });`;
    this.workerUrl = new URL(`data:text/javascript,${encodeURIComponent(workerCode)}`);
  }

  private static async compileModule(): Promise<WebAssembly.Module> {
    return WebAssembly.compile(await fs.promises.readFile(wasmUrl));
  }

  private getInstance(): ShellCheckInstance {
    // Lazily create instances, up to the pool size
    const idle = this.instances.find((instance) => instance.inFlight === 0);
    if (idle) {
      return idle;
    }
    if (this.instances.length < this.size) {
      this.module ??= ShellCheckWorkerPool.compileModule();
      const workerUrl = this.workerUrl;
      const instance = {
        shellcheck: createShellCheck({
          module: this.module,
          createWorker() {
            const worker = new Worker(workerUrl);
            return {
              postMessage: (message) => worker.postMessage(message),
              onMessage: (listener) => worker.on('message', listener),
              onError: (listener) => worker.on('error', listener),
              onExit: (listener) => worker.on('exit', listener),
              terminate: () => worker.terminate(),
            };
          },
        }),
        inFlight: 0,
      };
      this.instances.push(instance);
      return instance;
    }
    return this.instances.reduce((least, instance) =>
      instance.inFlight < least.inFlight ? instance : least,
    );
  }

  async lint(code: string, dialect: 'bash' | 'sh'): Promise<ShellCheckComment[] | undefined> {
    const args = ['-f', 'json1', '-S', this.options.severity];
    if (this.options.exclude.length) {
      args.push('-e', this.options.exclude.join(','));
    }
    if (!code.startsWith('#!') && !/^[ \t]*#[ \t]*shellcheck[ \t][^\n]*\bshell=/m.test(code)) {
      args.push('-s', dialect);
    }
    args.push('-');

    const instance = this.getInstance();
    instance.inFlight += 1;
    try {
      const result = await instance.shellcheck.lint({ args, stdin: code });
      if (result.exitCode >= 2) {
        throw new Error(`ShellCheck exited with code ${result.exitCode}: ${result.stderr}`);
      }

      let comments: ShellCheckComment[];
      try {
        comments = (JSON.parse(result.stdout) as { comments: ShellCheckComment[] }).comments;
      } catch {
        throw new Error(`ShellCheck returned invalid output: ${result.stdout} ${result.stderr}`);
      }

      if (comments.some((comment) => UNSUPPORTED_SHELL_CODES.includes(comment.code))) {
        return undefined;
      }
      return comments;
    } finally {
      instance.inFlight -= 1;
    }
  }

  async dispose(): Promise<void> {
    await Promise.all(this.instances.map((instance) => instance.shellcheck.dispose()));
  }
}

// Prefer the source file on disk, so reported line numbers count front matter that Metalsmith strips
const sourceText = async (
  metalsmith: Metalsmith,
  filename: string,
  contents: string,
): Promise<{ text: string; lineOffset: number }> => {
  try {
    const text = await fs.promises.readFile(metalsmith.path(metalsmith.source(), filename), 'utf8');
    if (text.endsWith(contents)) {
      const before = text.slice(0, text.length - contents.length);
      return { text, lineOffset: before.split('\n').length - 1 };
    }
  } catch {
    // Missing or unreadable, e.g. the file was generated by an earlier plugin
  }
  return { text: contents, lineOffset: 0 };
};

const formatFailure = (
  filename: string,
  contents: string,
  comments: ShellCheckComment[],
): string => {
  const codeFrames = comments
    .map(
      (comment) =>
        `SC${comment.code} (${comment.level}): ${comment.message}\n\n${codeFrameColumns(contents, {
          // ShellCheck columns are 1-based, @babel/code-frame columns are 0-based
          start: { line: comment.line, column: comment.column - 1 },
        }).replace(/^/gm, '  ')}`,
    )
    .join('\n\n');
  return `${filename}:\n\n${codeFrames.replace(/^/gm, '  ')}`;
};

const FENCE_DIALECTS: Record<string, 'bash' | 'sh'> = {
  bash: 'bash',
  shell: 'bash',
  console: 'bash',
  sh: 'sh',
};

// Strip `$ ` prompts from terminal-session snippets and blank out the output lines, keeping the line count
const extractTerminalSession = (
  code: string,
): { code: string; columnOffsets: number[] } | undefined => {
  const lines = code.split('\n');
  if (!lines.some((line) => line.startsWith('$ '))) {
    return undefined;
  }

  const columnOffsets: number[] = [];
  let continued = false;
  const extracted = lines.map((line) => {
    let kept: string;
    if (continued) {
      kept = line;
      columnOffsets.push(0);
    } else if (line.startsWith('$ ')) {
      kept = line.slice(2);
      columnOffsets.push(2);
    } else {
      columnOffsets.push(0);
      return '';
    }
    // An even number of trailing backslashes is escaped backslashes, not a continuation
    continued = (/\\*$/.exec(kept)?.[0].length ?? 0) % 2 === 1;
    return kept;
  });
  return { code: extracted.join('\n'), columnOffsets };
};

const lintMarkdown = async (
  pool: ShellCheckWorkerPool,
  contents: string,
  debug: (...args: unknown[]) => void,
  filename: string,
): Promise<ShellCheckComment[]> => {
  const tree = unified().use(remarkParse).parse(contents);

  const blocks: { value: string; dialect: 'bash' | 'sh'; line: number; column: number }[] = [];
  visit(tree, 'code', (node) => {
    // Strip highlight metadata such as `bash{2}`
    const dialect = FENCE_DIALECTS[(node.lang ?? '').replace(/\{.*\}$/, '').toLowerCase()];
    if (!dialect || !node.position) {
      return;
    }
    blocks.push({
      // Windows editors
      value: node.value.replace(/\r\n/g, '\n'),
      dialect,
      line: node.position.start.line,
      column: node.position.start.column,
    });
  });

  const results = await Promise.all(
    blocks.map(async (block) => {
      if (!block.value.trim()) {
        return [];
      }
      const session = extractTerminalSession(block.value);
      const comments = await pool.lint(session?.code ?? block.value, block.dialect);
      if (comments === undefined) {
        debug('skipping unsupported shell in %s', filename);
        return [];
      }
      return comments.map((comment) => {
        // Re-add the stripped prompt, `columnOffsets` is indexed by 0-based snippet line
        const column = comment.column + (session?.columnOffsets[comment.line - 1] ?? 0);
        const endColumn = comment.endColumn + (session?.columnOffsets[comment.endLine - 1] ?? 0);
        return {
          ...comment,
          line: block.line + comment.line,
          endLine: block.line + comment.endLine,
          column: column + block.column - 1,
          endColumn: endColumn + block.column - 1,
        };
      });
    }),
  );

  return results.flat().sort((a, b) => a.line - b.line || a.column - b.column);
};

export default (options: Options = {}): Metalsmith.Plugin => {
  const defaultedOptions = deepmerge.all<Required<Options>>(
    [
      {
        shell: '**/*.{sh,bash}',
        markdown: '**/*.md',
        exclude: [
          'SC1091', // can't follow sourced files, ShellCheck runs without filesystem access
          'SC2148', // missing shebang, the plugin passes `-s` when no shell is declared
        ],
        severity: 'style',
        parallelism: os.cpus().length,
      },
      options || {},
    ],
    { arrayMerge: (destinationArray, sourceArray) => sourceArray },
  );

  return async (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-shellcheck');
    debug('running with options: %O', defaultedOptions);
    debug('using ShellCheck %s', SHELLCHECK_VERSION);

    const shellFiles = metalsmith.match(defaultedOptions.shell, Object.keys(files));

    // A file matching both globs is linted as shell only
    const markdownFiles = metalsmith
      .match(defaultedOptions.markdown, Object.keys(files))
      .filter((filename) => !shellFiles.includes(filename));

    const workerPool = new ShellCheckWorkerPool(defaultedOptions.parallelism, defaultedOptions);
    const failures: { filename: string; message: string }[] = [];

    let error: Error | undefined;
    try {
      await async.eachLimit(
        [
          ...shellFiles.map((filename) => ({ filename, markdown: false })),
          ...markdownFiles.map((filename) => ({ filename, markdown: true })),
        ],
        defaultedOptions.parallelism,
        async.asyncify(async ({ filename, markdown }: { filename: string; markdown: boolean }) => {
          debug('processing file: %s', filename);

          const contents = files[filename].contents.toString();
          try {
            const comments = await (markdown
              ? lintMarkdown(workerPool, contents, debug, filename)
              : workerPool.lint(contents, 'bash'));
            if (comments === undefined) {
              debug('skipping unsupported shell: %s', filename);
            } else if (comments.length) {
              // Only read the source file from disk when there is something to report
              const { text, lineOffset } = await sourceText(metalsmith, filename, contents);
              failures.push({
                filename,
                message: formatFailure(
                  filename,
                  text,
                  comments.map((comment) => ({
                    ...comment,
                    line: comment.line + lineOffset,
                    endLine: comment.endLine + lineOffset,
                  })),
                ),
              });
            }
          } catch (err) {
            debug.error('ShellCheck error: %s', err);
            failures.push({ filename, message: `${filename}:\n\n${err}` });
          }
        }),
      );
    } catch (err) {
      error = err as Error;
    } finally {
      try {
        await workerPool.dispose();
      } catch (disposeErr) {
        debug.error('dispose error: %s', disposeErr);
      }
    }

    if (error) {
      done(error);
      return;
    }

    if (failures.length) {
      done(
        new Error(
          failures
            .sort((a, b) => a.filename.localeCompare(b.filename))
            .map((failure) => failure.message)
            .join('\n\n'),
        ),
      );
      return;
    }

    done();
  };
};
