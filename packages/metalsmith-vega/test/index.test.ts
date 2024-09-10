import { describe, expect, it, jest } from '@jest/globals';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'fs';
import Metalsmith from 'metalsmith';
import { join } from 'path';

// import assertDir from 'assert-dir-equal';
import vega, { Options } from '../index.js';

jest.setTimeout(10_000);

interface Config {
  options: Options;
  error?: string;
}

const test = (dir: string, config: Config) => {
  describe(dir, () => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    it('should build', (testDone) => {
      Metalsmith(`${dir}`)
        // Run the plugin
        .use(vega(config.options))
        // Test the output
        .build((err) => {
          if (config.error) {
            expect((err ?? '').toString()).toMatch(config.error);
          } else {
            expect(err).toBeNull();
          }

          if (err) {
            testDone();
            return;
          }

          // assertDir(`${dir}/build`, `${dir}/expected`, { filter: () => true });
          testDone();
        });
    });
  });
};

describe('metalsmith-vega', () => {
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
