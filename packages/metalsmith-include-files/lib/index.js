const fg = require('fast-glob');
const Mode = require('stat-mode');

const fs = require('fs');
const path = require('path');

module.exports = (options) => (files, metalsmith, done) => {
  options = options || {};

  Object.keys(options)
    .forEach((folder) => {
      let globs = options[folder];
      if (!Array.isArray(globs)) {
        globs = [globs];
      }

      fg.sync(globs)
        .forEach((file) => {
          const contents = fs.readFileSync(file);
          const key = path.join(folder, path.basename(file));
          files[key] = {
            contents,
            mode: Mode(fs.statSync(file)).toOctal(),
          };
        });
    });

  done();
};
