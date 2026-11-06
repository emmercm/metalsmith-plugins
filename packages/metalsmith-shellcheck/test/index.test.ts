import assertDir from 'assert-dir-equal';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'fs';
import Metalsmith from 'metalsmith';
import { join } from 'path';
import { describe, expect, it } from 'vitest';

import shellcheck, { Options } from '../index.js';

interface Config {
  options: Options;
  error?: string;
  skip?: boolean;
}

const test = (dir: string, config: Config) => {
  if (config.skip) {
    // Covered by a standalone test
    return;
  }

  describe(dir, () => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    it('should build', async () => {
      try {
        await Metalsmith(`${dir}`)
          // Run the plugin
          .use(shellcheck(config.options))
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

describe('metalsmith-shellcheck', () => {
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

describe('metalsmith-shellcheck (standalone)', () => {
  it('should be reusable across builds', async () => {
    const plugin = shellcheck();
    for (let i = 0; i < 2; i += 1) {
      await expect(Metalsmith('test/fixtures/shell-failure').use(plugin).build()).rejects.toThrow(
        'SC2086 (info)',
      );
    }
  });

  it('should normalize CRLF in Markdown snippets', async () => {
    await expect(
      Metalsmith('test/fixtures/markdown-pass')
        .use((files) => {
          files['post.md'].contents = Buffer.from(
            files['post.md'].contents.toString().replace(/\n/g, '\r\n'),
          );
        })
        .use(shellcheck())
        .build(),
    ).resolves.toBeDefined();
  });

  it('should not report Markdown bash blocks as POSIX sh', async () => {
    const err = await Metalsmith('test/fixtures/markdown-sh')
      .use(shellcheck())
      .build()
      .then(
        () => undefined,
        (e: unknown) => e,
      );
    expect(String(err).match(/SC3010/g)).toHaveLength(1);
  });

  it('should skip zsh Markdown blocks with a shebang', async () => {
    const err = await Metalsmith('test/fixtures/markdown-shebang')
      .use(shellcheck())
      .build()
      .then(
        () => undefined,
        (e: unknown) => e,
      );
    expect(String(err)).not.toContain('echo $x');
  });

  it('should lint fences with highlight metadata', async () => {
    mkdirSync('test/fixtures/generated-file/src', { recursive: true });
    const err = await Metalsmith('test/fixtures/generated-file')
      .use((files) => {
        files['meta.md'] = { contents: Buffer.from('```bash{2}\nrm -rf $DIR/*\n```\n') };
      })
      .use(shellcheck())
      .build()
      .then(
        () => undefined,
        (e: unknown) => e,
      );
    expect(String(err)).toContain('SC2086');
  });

  it('should fall back to contents line numbers for generated files', async () => {
    mkdirSync('test/fixtures/generated-file/src', { recursive: true });
    const err = await Metalsmith('test/fixtures/generated-file')
      .use((files) => {
        files['generated.md'] = { contents: Buffer.from('```bash\nrm -rf $DIR/*\n```\n') };
      })
      .use(shellcheck())
      .build()
      .then(
        () => undefined,
        (e: unknown) => e,
      );
    expect(String(err)).toContain('generated.md:');
    expect(String(err)).toContain('> 2 | rm -rf $DIR/*');
  });
});
