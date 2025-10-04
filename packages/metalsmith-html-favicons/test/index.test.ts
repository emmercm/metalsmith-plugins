import { describe, expect, it } from '@jest/globals';
import assertDir from 'assert-dir-equal';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'fs';
import Metalsmith from 'metalsmith';
import { join } from 'path';

import favicons, { Options } from '../index.js';

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
          .use(favicons(config.options))
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

      assertDir(`${dir}/build`, `${dir}/expected`, {
        // Don't test the contents of image files, these are likely to change over time as various
        // libraries are updated
        filter: (name) => name.toLowerCase().match(/\.(ico|png|svg)$/) === null,
      });
    });
  });
};

describe('metalsmith-html-favicons', () => {
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
