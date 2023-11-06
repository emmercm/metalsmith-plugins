// @ts-expect-error TS(7016): Could not find a declaration file for module 'asse... Remove this comment to see the full error message
import assertDir from 'assert-dir-equal';
import {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} from 'fs';
import Metalsmith from 'metalsmith';
import { join } from 'path';

import sri from './index';

const test = (dir: any, config: any) => {
  // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe(dir, () => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should build', (testDone: any) => {
      Metalsmith(`${dir}`)
        // Run the plugin
        .use(sri(config.options))
        // Test the output
        .build((err) => {
          if (config.error) {
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(err.toString()).toMatch(config.error);
          } else {
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
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

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('metalsmith-html-sri', () => {
  const dirs = (p: any) => readdirSync(p)
    .map((f) => join(p, f))
    .filter((f) => statSync(f).isDirectory());
  dirs('lib/fixtures')
    .forEach((dir) => {
      const config = existsSync(`${dir}/config.json`) ? JSON.parse(readFileSync(`${dir}/config.json`).toString()) : {};
      test(dir, config);
    });
});
