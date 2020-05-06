'use strict';

const {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} = require('fs');
const { join } = require('path');

const Metalsmith = require('metalsmith');
const collect = require('metalsmith-auto-collections');
const hbtmd = require('metalsmith-hbt-md');
const handlebars = require('handlebars');
const assertDir = require('assert-dir-equal');

const related = require('./index');

const test = (dir, config) => {
  it(`should build the directory "${dir}"`, (done) => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    Metalsmith(`${dir}`)
      .use(collect({}))
      .use(related(config.options))
      .use(hbtmd(handlebars))
      .build((err) => {
        if (config.error) {
          expect(err)
            .toBe(config.error);
        } else {
          expect(err)
            .toBeNull();
        }

        if (err) {
          done();
          return;
        }

        assertDir(`${dir}/build`, `${dir}/expected`, { filter: () => true });
        done();
      });
  });
};

describe('metalsmith-collections-related', () => {
  const dirs = (p) => readdirSync(p)
    .map((f) => join(p, f))
    .filter((f) => statSync(f)
      .isDirectory());
  dirs('lib/fixtures')
    .forEach((dir) => {
      const config = existsSync(`${dir}/config.json`) ? JSON.parse(readFileSync(`${dir}/config.json`)
        .toString()) : {};
      test(dir, config);
    });
});
