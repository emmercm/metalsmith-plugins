function fixConditionalExports(exports) {
  if (!exports) {
    return exports;
  }

  if (exports.import && exports.require) {
    exports.require = exports.import;
  }

  return exports;
}

module.exports = function resolver(path, options) {
  return options.defaultResolver(path, {
    ...options,
    packageFilter: (pkg, file, dir) => {
      // As of v29.7.0, Jest doesn't respect conditional exports, it always uses the
      // `exports.require` field from package.json, even if package is an ESM "module". Fix that.
      if (pkg.type === 'module' && pkg.exports) {
        if (pkg.exports['.']) {
          pkg.exports['.'] = fixConditionalExports(pkg.exports['.']);
        }
        if (pkg.exports) {
          pkg.exports = fixConditionalExports(pkg.exports);
        }
      }
      return pkg;
    }
  });
}
