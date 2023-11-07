import { jest as requiredJest } from '@jest/globals';
import assertDir from 'assert-dir-equal';
import {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} from 'fs';
import handlebars from 'handlebars';
import Metalsmith from 'metalsmith';
import hbtmd from 'metalsmith-hbt-md';
import { join } from 'path';

import githubProfile, { Options } from '../index.js';

requiredJest.setTimeout(30 * 1000);

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
        // Run the plugin
        .use(githubProfile(config.options))
        .use(hbtmd(handlebars))
        // Test the output
        .build((err) => {
          try {
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
          } catch (assertionError) {
            testDone(assertionError);
          }
        });
    });
  });
};

describe('metalsmith-github-profile', () => {
  const dirs = (p: string) => readdirSync(p)
    .map((f) => join(p, f))
    .filter((f) => statSync(f).isDirectory());
  dirs('test/fixtures')
    .forEach((dir) => {
      const config = existsSync(`${dir}/config.json`) ? JSON.parse(readFileSync(`${dir}/config.json`).toString()) : {};
      test(dir, config);
    });
});
