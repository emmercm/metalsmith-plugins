'use strict';

const deepmerge = require('deepmerge');
const callsites = require('callsites');
const chalk = require('chalk');
const ora = require('ora');

const LEFT_MARGIN = 7;

const IGNORED_JAVASCRIPT_FILES = [
  'metalsmith-tracer',
  'next_tick.js',
  'task_queues.js',
  'timers.js',
];

const timePrefix = (milliseconds) => {
  let value = milliseconds;
  let suffix = 'ms';

  if (milliseconds >= 1000) {
    value = milliseconds / 1000;
    suffix = 's';
  }

  const fixed = value.toFixed(1);
  return ' '.repeat(LEFT_MARGIN - fixed.length - suffix.length) + fixed + suffix;
};

module.exports = (Metalsmith, options) => {
  options = deepmerge({
    log: console.log,
  }, options || {});

  const spinner = ora({
    prefixText: `\n${' '.repeat(LEFT_MARGIN - 5 - 1)}`,
    spinner: 'arrow3',
  });
  let index = 0;
  let count = 0;

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

      const doneInterceptor = (...args) => {
        const elapsed = process.hrtime(start);
        const elapsedMs = (elapsed[0] * 1e9 + elapsed[1]) / 1000000;

        let elapsedColor = chalk.green;
        if (elapsedMs >= 100) {
          elapsedColor = chalk.yellow;
        }
        if (elapsedMs >= 1000) {
          elapsedColor = chalk.red;
        }

        // Find the call stack filenames
        const filenames = callsites()
          .slice(1)
          .map((callsite) => callsite.getFileName());

        // Find the first non-plugin file in the call stack. This is to prevent us from
        // mis-identifying plugins or anonymous functions.
        let firstNonNodeModulesIdx = filenames.length;
        for (let i = 0; i < filenames.length; i += 1) {
          const filename = filenames[i];
          // Found first non-node_modules file, we're no longer in the plugin call stack
          if (filename.indexOf('/node_modules/') === -1) {
            firstNonNodeModulesIdx = i;
            break;
          }
          // Found ware, Metalsmith uses this for plugin management,
          // we're no longer in the plugin call stack
          if (filename.indexOf('/node_modules/ware') !== -1
            && filename.indexOf('metalsmith-branch') === -1) {
            firstNonNodeModulesIdx = i;
            break;
          }
        }

        // Find all metalsmith-related packages
        const eligiblePackages = filenames
          .slice(0, firstNonNodeModulesIdx + 1)
          .filter((filename) => filename)
          .map((filename) => {
            const match = filename.match(/.+?[/\\]node_modules[/\\](@metalsmith\/[^/\\]+|metalsmith-[^/\\]+)[/\\]/);
            return match ? match[1] : null;
          })
          .filter((filename) => filename && filename.indexOf('metalsmith-tracer') === -1)
          .filter((val, idx, arr) => idx === 0 || arr[idx - 1] !== val);

        let pkgStr = eligiblePackages
          .filter((eligiblePackage) => eligiblePackage !== 'metalsmith-branch')
          .reverse()
          .join(', ');
        let pkgColor = chalk.reset;

        if (!pkgStr) {
          pkgColor = chalk.blackBright;
          pkgStr = (filenames
            .filter((filename) => filename.indexOf('/node_modules/') === -1)
            .find(() => true) || '')
            .replace(Metalsmith.directory(), '').replace(/^[/\\]+/, '');
        }
        if (!pkgStr || IGNORED_JAVASCRIPT_FILES.some((ignored) => pkgStr.indexOf(ignored) !== -1)) {
          pkgColor = chalk.blackBright;
          pkgStr = '(unnamed)';
        }

        spinner.stop();
        options.log(`${elapsedColor(timePrefix(elapsedMs))} ${pkgColor(pkgStr)}`);

        done(...args);
      };

      // Run the plugin but give it our new "done" callback
      plugin(files, metalsmith, doneInterceptor);

      // If the plugin has fewer than 3 arguments then it can't call the "done"
      // callback, so assume it executed synchronously and call it manually.
      if (plugin.length < 3) {
        doneInterceptor();
      }
    }]);
  };

  const { build } = Metalsmith;
  Metalsmith.build = (func) => {
    options.log(`${'-'.repeat(LEFT_MARGIN)} ${chalk.bold('Build process started')} ${'-'.repeat(LEFT_MARGIN)}`);
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
