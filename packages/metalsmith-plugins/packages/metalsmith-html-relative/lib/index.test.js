'use strict';

const {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} = require('fs');
const { join } = require('path');

const Metalsmith = require('metalsmith');
const assertDir = require('assert-dir-equal');

const relative = require('./index');

const test = (dir, options) => {
  it(`should build the directory "${dir}"`, (done) => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    Metalsmith(`${dir}`)
      .use(relative(options))
      .build((err) => {
        if (err) {
          done(err);
        }

        assertDir(`${dir}/build`, `${dir}/expected`, { filter: () => true });
        done();
      });
  });
};

describe('metalsmith-html-relative', () => {
  const dirs = (p) => readdirSync(p)
    .map((f) => join(p, f))
    .filter((f) => statSync(f).isDirectory());
  dirs('lib/fixtures').forEach((dir) => {
    const options = existsSync(`${dir}/options.json`) ? JSON.parse(readFileSync(`${dir}/options.json`).toString()) : null;
    test(dir, options);
  });
});
