'use strict';

const {
  existsSync, mkdirSync, readdirSync, readFileSync, statSync,
} = require('fs');
const { join } = require('path');

const deepmerge = require('deepmerge');
const Metalsmith = require('metalsmith');
const assertDir = require('assert-dir-equal');

const tracer = require('./index');

const test = (dir, config) => {
  it(`should build the directory "${dir}"`, (done) => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    // Fake console.log
    const buffer = [];
    const options = deepmerge(config.options || {}, {
      log: (msg) => buffer.push(msg),
    });

    tracer(Metalsmith(`${dir}`), options)
      .use((files, metalsmith, metalsmithDone) => {
        metalsmithDone();
      })
      .use((files, metalsmith, metalsmithDone) => {
        setImmediate(metalsmithDone);
      })
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

        expect(buffer).toHaveLength(7);
        expect(buffer[0]).toContain('Build process started');
        expect(buffer[1]).toBeUndefined();
        expect(buffer[2]).toContain(__filename);
        expect(buffer[3]).toContain('(unnamed)');
        expect(buffer[4]).toBeUndefined();
        expect(buffer[5]).toContain('Total build time');
        expect(buffer[6]).toBeUndefined();

        done();
      });
  });
};

describe('metalsmith-tracer', () => {
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
