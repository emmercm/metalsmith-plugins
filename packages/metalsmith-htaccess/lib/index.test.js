import {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} from 'fs';
import { join } from 'path';

import assertDir from 'assert-dir-equal';
import Metalsmith from 'metalsmith';

import htaccess from './index';

const test = (dir, config) => {
  describe(dir, () => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    it('should build', (testDone) => {
      Metalsmith(`${dir}`)
        // Run the plugin
        .use(htaccess(config))
        // Test the output
        .build((err) => {
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
        });
    });
  });
};

describe('metalsmith-htaccess', () => {
  const dirs = (p) => readdirSync(p)
    .map((f) => join(p, f))
    .filter((f) => statSync(f).isDirectory());
  dirs('lib/fixtures')
    .forEach((dir) => {
      const config = existsSync(`${dir}/config.json`) ? JSON.parse(readFileSync(`${dir}/config.json`).toString()) : {};
      test(dir, config);
    });
});
