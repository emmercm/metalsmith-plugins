'use strict';

const {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} = require('fs');
const { join } = require('path');

const Metalsmith = require('metalsmith');
const hbtmd = require('metalsmith-hbt-md');
const handlebars = require('handlebars');
const assertDir = require('assert-dir-equal');
const { jest: requiredJest } = require('@jest/globals');

const githubProfile = require('./index');

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
        .use(githubProfile(config.options))
        .use(hbtmd(handlebars))
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

describe('metalsmith-github-profile', () => {
  const dirs = (p) => readdirSync(p)
    .map((f) => join(p, f))
    .filter((f) => statSync(f).isDirectory());
  dirs('lib/fixtures')
    .forEach((dir) => {
      const config = existsSync(`${dir}/config.json`) ? JSON.parse(readFileSync(`${dir}/config.json`).toString()) : {};
      test(dir, config);
    });
});
