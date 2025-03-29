import { describe, expect, it } from '@jest/globals';
import collections from '@metalsmith/collections';
import assertDir from 'assert-dir-equal';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'fs';
import handlebars from 'handlebars';
import Metalsmith from 'metalsmith';
import hbtmd from 'metalsmith-hbt-md';
import paths from 'metalsmith-paths';
import { join } from 'path';

import related, { Options } from '../index.js';

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
          .use(
            collections({
              wikipedia: {
                pattern: 'wikipedia/*.md',
              },
            }),
          )
          // Run the plugin
          .use(paths())
          .use(related(config.options))
          .use(hbtmd(handlebars))
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

      assertDir(`${dir}/build`, `${dir}/expected`, { filter: () => true });
    });
  });
};

describe('metalsmith-collections-related', () => {
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
