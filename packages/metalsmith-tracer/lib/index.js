'use strict';

const deepmerge = require('deepmerge');
const callsites = require('callsites');
const chalk = require('chalk');
const ora = require('ora');

const leftMargin = 7;

const timePrefix = (milliseconds) => {
  let value = milliseconds;
  let suffix = 'ms';

  if (milliseconds >= 1000) {
    value = milliseconds / 1000;
    suffix = 's';
  }

  const fixed = value.toFixed(1);
  return ' '.repeat(leftMargin - fixed.length - suffix.length) + fixed + suffix;
};

module.exports = (Metalsmith, options) => {
  options = deepmerge({
    log: console.log,
  }, options || {});

  const spinner = ora({
    prefixText: `\n${' '.repeat(leftMargin - 5 - 1)}`,
    spinner: 'arrow3',
  });
  let index = 0; let
    count = 0;

  const { use } = Metalsmith;
  Metalsmith.use = (plugin) => {
    count += 1;

    return use.apply(Metalsmith, [(files, metalsmith, done) => {
      const start = process.hrtime();

      // Show progress message
      spinner.stop();
      index += 1;
      spinner.text = chalk.bold(`${index}/${count} (${((index / count) * 100).toFixed(1)}%)`);
      spinner.start();

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

        const filenames = callsites()
          .slice(1)
          .map((callsite) => callsite.getFileName());
        const pkg = filenames
          .filter((filename) => filename)
          .map((filename) => {
            const match = filename.match(/.+?[/\\]node_modules[/\\](metalsmith-[^/\\]+)[/\\]/);
            return match ? match[1] : null;
          })
          .filter((name) => name && name !== 'async')
          .find(() => true);
        let pkgStr = pkg || filenames[0];

        let pkgColor = chalk.reset;
        if (!pkgStr || pkgStr === 'metalsmith-if' || pkgStr.indexOf('timers.js') !== -1 || pkgStr.indexOf('next_tick.js') !== -1) {
          pkgColor = chalk.blackBright;
          pkgStr = '(unnamed)';
        }

        spinner.stop();
        options.log(`${elapsedColor(timePrefix(elapsedMs))} ${pkgColor(pkgStr)}`);

        done(...args);
      });
    }]);
  };

  const { build } = Metalsmith;
  Metalsmith.build = (func) => {
    options.log(`${'-'.repeat(leftMargin)} ${chalk.bold('Build process started')} ${'-'.repeat(leftMargin)}`);
    options.log();

    const start = process.hrtime();

    return build.apply(Metalsmith, [(...args) => {
      const elapsed = process.hrtime(start);
      const elapsedMs = (elapsed[0] * 1e9 + elapsed[1]) / 1000000;

      spinner.stop();
      options.log();
      options.log(`${chalk.bold(timePrefix(elapsedMs))} Total build time`);
      options.log();

      func(...args);
    }]);
  };

  return Metalsmith;
};
