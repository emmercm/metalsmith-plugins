import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'fs';
import Metalsmith from 'metalsmith';
import { createRequire } from 'module';
import { basename, join } from 'path';
import { pathToFileURL } from 'url';
import { describe, expect, it } from 'vitest';

// import assertDir from 'assert-dir-equal';
import mermaid, { Options } from '../index.js';

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

    it('should build', { retry: 2 }, async () => {
      try {
        await Metalsmith(`${dir}`)
          // Run the plugin
          .use(mermaid(config.options))
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

      // TODO: can't test file contents, CircleCI's Puppeteer viewport renders different
      // assertDir(`${dir}/build`, `${dir}/expected`);
      readdirSync(`${dir}/build`)
        .map((builtFilename) => join(`${dir}/build`, builtFilename))
        .forEach((builtFilename) => {
          const builtContents = readFileSync(builtFilename).toString();

          // metalsmith-mermaid@0.0.10 / mermaid@9.3.0 style errors
          expect(builtContents).not.toContain('Syntax error in graph');

          // metalsmith-mermaid@0.0.10 blank rendering issue
          expect(builtContents).not.toContain('<g></g></svg>');

          // Mermaid's fallback for icons that couldn't be found in any registered icon pack
          expect(builtContents).not.toContain('>?</tspan>');
        });
    });
  });
};

// Options that can't be expressed in a static config.json, such as absolute file:// URLs
const programmaticOptions: Record<string, Options> = {
  'icon-packs-names-and-urls': {
    iconPacksNamesAndUrls: {
      logos: pathToFileURL(createRequire(import.meta.url).resolve('@iconify-json/logos/icons.json'))
        .href,
    },
  },
};

describe('metalsmith-mermaid', () => {
  const dirs = (p: string) =>
    readdirSync(p)
      .map((f) => join(p, f))
      .filter((f) => statSync(f).isDirectory());
  dirs('test/fixtures').forEach((dir) => {
    const config: Config = existsSync(`${dir}/config.json`)
      ? JSON.parse(readFileSync(`${dir}/config.json`).toString())
      : {};
    const dirName = basename(dir);
    if (programmaticOptions[dirName]) {
      config.options = { ...config.options, ...programmaticOptions[dirName] };
    }
    test(dir, config);
  });
});
