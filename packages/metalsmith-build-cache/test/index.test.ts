import { describe, expect, it } from '@jest/globals';
import assertDir from 'assert-dir-equal';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'fs';
import Metalsmith from 'metalsmith';
import { join } from 'path';

import cache, { Options } from '../index.js';

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
      // Should build once
      try {
        await cache
          .metalsmith(Metalsmith(`${dir}`), config.options)
          .clean(true)
          .build();
      } catch (err) {
        if (config.error) {
          expect((err ?? '').toString()).toMatch(config.error);
        } else {
          expect(err).toBeNull();
        }
        return;
      }

      // Should build a second time
      await cache
        .metalsmith(Metalsmith(`${dir}`), config.options)
        .clean(true)
        .build();

      assertDir(`${dir}/build`, `${dir}/expected`, { filter: () => true });
    });
  });
};

describe('metalsmith-build-cache', () => {
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
