import { jest as requiredJest } from '@jest/globals';
import assertDir from 'assert-dir-equal';
import {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} from 'fs';
import Metalsmith from 'metalsmith';
import { join } from 'path';

import linkChecker from './index';

requiredJest.setTimeout(30 * 1000);

const test = (dir, config) => {
  describe(dir, () => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    it('should build', (testDone) => {
      Metalsmith(`${dir}`)
        // Run the plugin
        .use(linkChecker(config.options))
        // Test the output
        .build((err) => {
          try {
            if (config.error) {
              expect(err.toString()).toMatch(config.error);
            } else {
              expect(err).toBeNull();
            }

            if (err) {
              testDone();
              return;
            }

            assertDir(`${dir}/build`, `${dir}/expected`, { filter: () => true });
            testDone();
          } catch (assertionError) {
            testDone(assertionError);
          }
        });
    });
  });
};

describe('metalsmith-link-checker', () => {
  const dirs = (p) => readdirSync(p)
    .map((f) => join(p, f))
    .filter((f) => statSync(f).isDirectory());
  dirs('lib/fixtures')
    .forEach((dir) => {
      const config = existsSync(`${dir}/config.json`) ? JSON.parse(readFileSync(`${dir}/config.json`).toString()) : {};
      test(dir, config);
    });
});
