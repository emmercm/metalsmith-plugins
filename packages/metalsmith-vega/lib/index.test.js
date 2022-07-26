import {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} from 'fs';
import { join } from 'path';
import { jest } from '@jest/globals';

import Metalsmith from 'metalsmith';
// const assertDir = require('assert-dir-equal');

import vega from './index';

jest.setTimeout(10_000);

const test = (dir, config) => {
  describe(dir, () => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    ['/', '\\'].forEach((pathSeparator) => {
      it(`should build with path separator "${pathSeparator}"`, (testDone) => {
        Metalsmith(`${dir}`)
          // Convert the path separators to the one being tested
          .use((files, metalsmith, done) => {
            Object.keys(files)
              .forEach((filename) => {
                const newFilename = filename.replace(/[/\\]/g, pathSeparator);
                if (newFilename !== filename) {
                  files[newFilename] = files[filename];
                  delete files[filename];
                }
              });
            done();
          })
          // Run the plugin
          .use(vega(config.options))
          // Convert the path separators back to system default
          .use((files, metalsmith, done) => {
            const properPathSeparator = process.platform === 'win32' ? '\\' : '/';
            Object.keys(files)
              .forEach((filename) => {
                const newFilename = filename.replace(/[/\\]/g, properPathSeparator);
                if (newFilename !== filename) {
                  files[newFilename] = files[filename];
                  delete files[filename];
                }
              });
            done();
          })
          // Test the output
          .build((err) => {
            if (config.error) {
              expect(err)
                .toBe(config.error);
            } else {
              expect(err)
                .toBeNull();
            }

            if (err) {
              testDone();
              return;
            }

            // assertDir(`${dir}/build`, `${dir}/expected`, { filter: () => true });
            testDone();
          });
      });
    });
  });
};

describe('metalsmith-vega', () => {
  const dirs = (p) => readdirSync(p)
    .map((f) => join(p, f))
    .filter((f) => statSync(f).isDirectory());
  dirs('lib/fixtures')
    .forEach((dir) => {
      const config = existsSync(`${dir}/config.json`) ? JSON.parse(readFileSync(`${dir}/config.json`).toString()) : {};
      test(dir, config);
    });
});
