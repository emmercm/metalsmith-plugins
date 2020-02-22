'use strict';

const deepmerge = require('deepmerge');
const callsites = require('callsites');
const chalk = require('chalk');

const timePrefix = (milliseconds) => {
  let value = milliseconds;
  let suffix = 'ms';

  if (milliseconds >= 1000) {
    value = milliseconds / 1000;
    suffix = 's';
  }

  const fixed = value.toFixed(1);
  return ' '.repeat(7 - fixed.length - suffix.length) + fixed + suffix;
};

module.exports = (Metalsmith, options) => {
  options = deepmerge({
    log: console.log,
  }, options || {});

  const { use } = Metalsmith;
  Metalsmith.use = (plugin) => use.apply(Metalsmith, [(files, metalsmith, done) => {
    const start = process.hrtime();

    plugin(files, metalsmith, (...args) => {
      const elapsed = process.hrtime(start);
      const elapsedMs = (elapsed[0] * 1e9 + elapsed[1]) / 1000000;

      let elapsedColor = chalk.green;
      if (elapsedMs >= 100) {
        elapsedColor = chalk.yellow;
      }
      if (elapsedMs >= 1000) {
        elapsedColor = chalk.red;
      }

      const filename = callsites()[1].getFileName();
      const pkg = filename.match(/.+?\/node_modules\/([^/]+)\//);
      const pkgStr = pkg ? pkg[1] : filename;

      const pkgColor = pkgStr === 'timers.js' ? chalk.blackBright : chalk.reset;

      options.log(`${elapsedColor(timePrefix(elapsedMs))} ${pkgColor(pkgStr)}`);

      done(...args);
    });
  }]);

  const { build } = Metalsmith;
  Metalsmith.build = (func) => {
    const start = process.hrtime();

    return build.apply(Metalsmith, [(...args) => {
      const elapsed = process.hrtime(start);
      const elapsedMs = (elapsed[0] * 1e9 + elapsed[1]) / 1000000;

      options.log(`\n${chalk.bold(`${timePrefix(elapsedMs)} Total build time`)}`);

      func(...args);
    }]);
  };

  return Metalsmith;
};
