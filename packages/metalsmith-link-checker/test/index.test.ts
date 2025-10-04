import { describe, expect, it, jest as requiredJest } from '@jest/globals';
import assertDir from 'assert-dir-equal';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'fs';
import Metalsmith from 'metalsmith';
import { join } from 'path';

import linkChecker, { Options } from '../index.js';

requiredJest.setTimeout(30 * 1000);

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

    it('should build', async () => {
      try {
        await Metalsmith(`${dir}`)
          // Run the plugin
          .use(linkChecker(config.options))
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

describe('metalsmith-link-checker', () => {
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
