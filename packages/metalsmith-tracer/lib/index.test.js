import {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} from 'fs';
import { join } from 'path';

import assertDir from 'assert-dir-equal';
import Metalsmith from 'metalsmith';

import tracer from './index';

const test = (dir, config) => {
  describe(dir, () => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    it('should build', (testDone) => {
      tracer(Metalsmith(`${dir}`), config.options)
        .use(() => {})
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

describe('metalsmith-tracer', () => {
  const dirs = (p) => readdirSync(p)
    .map((f) => join(p, f))
    .filter((f) => statSync(f).isDirectory());
  dirs('lib/fixtures')
    .forEach((dir) => {
      const config = existsSync(`${dir}/config.json`) ? JSON.parse(readFileSync(`${dir}/config.json`).toString()) : {};
      test(dir, config);
    });
});
