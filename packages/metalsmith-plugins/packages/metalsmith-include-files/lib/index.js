'use strict';

const fg = require('fast-glob');
const Mode = require('stat-mode');

const fs = require('fs');
const path = require('path');

module.exports = (options) => (files, metalsmith, done) => {
  options = options || {};

  const folders = Object.keys(options);
  for (let i = 0; i < folders.length; i += 1) {
    const folder = folders[i];
    let globs = options[folder];
    if (!Array.isArray(globs)) {
      globs = [globs];
    }

    const globbedFiles = fg.sync(globs);
    for (let j = 0; j < globbedFiles.length; j += 1) {
      const globbedFile = globbedFiles[j];
      const contents = fs.readFileSync(globbedFile);
      const key = path.join(folder, path.basename(globbedFile));
      if (files[key]) {
        done(`File already exists in build path: ${key}`);
        return;
      }
      files[key] = {
        contents,
        mode: Mode(fs.statSync(globbedFile)).toOctal(),
      };
    }
  }

  done();
};
