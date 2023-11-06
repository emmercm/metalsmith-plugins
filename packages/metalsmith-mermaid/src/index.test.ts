import { jest } from '@jest/globals';
import {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} from 'fs';
import Metalsmith from 'metalsmith';
import { join } from 'path';

// import assertDir from 'assert-dir-equal';
import mermaid from './index';

jest.setTimeout(15_000);

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
        .use(mermaid(config.options))
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

          // TODO: can't test file contents, CircleCI's Puppeteer viewport renders different
          // assertDir(`${dir}/build`, `${dir}/expected`, { filter: () => true });
          readdirSync(`${dir}/build`)
            .map((builtFilename) => join(`${dir}/build`, builtFilename))
            .forEach((builtFilename) => {
              const builtContents = readFileSync(builtFilename).toString();

              // metalsmith-mermaid@0.0.10 / mermaid@9.3.0 style errors
              // @ts-expect-error TS(2304): Cannot find name 'expect'.
              expect(builtContents).not.toContain('Syntax error in graph');

              // metalsmith-mermaid@0.0.10 blank rendering issue
              // @ts-expect-error TS(2304): Cannot find name 'expect'.
              expect(builtContents).not.toContain('<g></g></svg>');
            });

          testDone();
        });
    });
  });
};

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('metalsmith-mermaid', () => {
  const dirs = (p: any) => readdirSync(p)
    .map((f) => join(p, f))
    .filter((f) => statSync(f).isDirectory());
  dirs('lib/fixtures')
    .forEach((dir) => {
      const config = existsSync(`${dir}/config.json`) ? JSON.parse(readFileSync(`${dir}/config.json`).toString()) : {};
      test(dir, config);
    });
});
