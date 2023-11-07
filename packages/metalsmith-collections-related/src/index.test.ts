import assertDir from 'assert-dir-equal';
import {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} from 'fs';
import handlebars from 'handlebars';
import Metalsmith from 'metalsmith';
import collect from 'metalsmith-auto-collections';
import hbtmd from 'metalsmith-hbt-md';
import paths from 'metalsmith-paths';
import { join } from 'path';

import related, { Options } from './index.js';

interface Config {
  options: Options,
  error?: string,
}

const test = (dir: string, config: Config) => {
  describe(dir, () => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    it('should build', (testDone) => {
      Metalsmith(`${dir}`)
        .use(collect({}))
        // Run the plugin
        .use(paths())
        .use(related(config.options))
        .use(hbtmd(handlebars))
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

          assertDir(`${dir}/build`, `${dir}/expected`, { filter: () => true });
          testDone();
        });
    });
  });
};

describe('metalsmith-collections-related', () => {
  const dirs = (p: string) => readdirSync(p)
    .map((f) => join(p, f))
    .filter((f) => statSync(f).isDirectory());
  dirs('src/fixtures')
    .forEach((dir) => {
      const config = existsSync(`${dir}/config.json`) ? JSON.parse(readFileSync(`${dir}/config.json`).toString()) : {};
      test(dir, config);
    });
});
