const { readdirSync, statSync } = require('fs');
const { join } = require('path');

const Metalsmith = require('metalsmith');
const assertDir = require('assert-dir-equal');

const glob = require('./index');

const test = (dir) => {
  it(`should build the directory "${dir}"`, (done) => {
    Metalsmith(`${dir}`)
      .use(glob())
      .build((err) => {
        if (err) {
          done(err);
        }

        assertDir(`${dir}/expected`, `${dir}/build`);
        done();
      });
  });
};

describe('metalsmith-html-glob', () => {
  const dirs = p => readdirSync(p)
    .map(f => join(p, f))
    .filter(f => statSync(f).isDirectory());
  dirs('lib/fixtures').forEach(d => test(d));
});
