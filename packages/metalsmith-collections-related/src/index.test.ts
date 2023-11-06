// @ts-expect-error TS(7016): Could not find a declaration file for module 'asse... Remove this comment to see the full error message
import assertDir from 'assert-dir-equal';
import {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} from 'fs';
import handlebars from 'handlebars';
import Metalsmith from 'metalsmith';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'meta... Remove this comment to see the full error message
import collect from 'metalsmith-auto-collections';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'meta... Remove this comment to see the full error message
import hbtmd from 'metalsmith-hbt-md';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'meta... Remove this comment to see the full error message
import paths from 'metalsmith-paths';
import { join } from 'path';

import related from './index.js';

const test = (dir: string, config: any) => {
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
  dirs('lib/fixtures')
    .forEach((dir) => {
      const config = existsSync(`${dir}/config.json`) ? JSON.parse(readFileSync(`${dir}/config.json`).toString()) : {};
      test(dir, config);
    });
});
