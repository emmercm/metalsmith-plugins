import {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} from 'fs';
import { join } from 'path';

import { jest } from '@jest/globals';
import Metalsmith from 'metalsmith';
// import assertDir from 'assert-dir-equal';

import mermaid from './index';

jest.setTimeout(15_000);

const test = (dir, config) => {
  describe(dir, () => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    it('should build', (testDone) => {
      Metalsmith(`${dir}`)
        // Run the plugin
        .use(mermaid(config.options))
        // Test the output
        .build((err) => {
          if (config.error) {
            expect(err).toBe(config.error);
          } else {
            expect(err).toBeNull();
          }

          if (err) {
            testDone();
            return;
          }

          // TODO: can't test file contents, CircleCI's Puppeteer viewport renders different
          // assertDir(`${dir}/build`, `${dir}/expected`, { filter: () => true });
          readdirSync(`${dir}/build`)
            .map((builtFilename) => join(`${dir}/build`, builtFilename))
            .forEach((builtFilename) => {
              const builtContents = readFileSync(builtFilename).toString();
              if (config.mermaidError) {
                expect(builtContents).toContain('Syntax error in graph');
              } else {
                expect(builtContents).not.toContain('Syntax error in graph');
              }
            });

          testDone();
        });
    });
  });
};

describe('metalsmith-mermaid', () => {
  const dirs = (p) => readdirSync(p)
    .map((f) => join(p, f))
    .filter((f) => statSync(f).isDirectory());
  dirs('lib/fixtures')
    .forEach((dir) => {
      const config = existsSync(`${dir}/config.json`) ? JSON.parse(readFileSync(`${dir}/config.json`).toString()) : {};
      test(dir, config);
    });
});
