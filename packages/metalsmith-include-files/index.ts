import deepmerge from 'deepmerge';
import fg from 'fast-glob';
import fs from 'fs';
import Metalsmith from 'metalsmith';
import path from 'path';
import Mode from 'stat-mode';

export interface Options {
  directories?: { [key: string]: string[] };
  overwrite?: boolean;
}

export default (options: Options = {}): Metalsmith.Plugin =>
  (files, metalsmith, done) => {
    const defaultedOptions: Options = deepmerge.all(
      [
        {
          directories: {},
          overwrite: false,
        } satisfies Options,
        options || {},
      ],
      { arrayMerge: (destinationArray, sourceArray) => sourceArray },
    );

    const debug = metalsmith.debug('metalsmith-include-files');
    debug('running with options: %O', defaultedOptions);

    const folders = Object.keys(defaultedOptions.directories ?? {});
    for (let i = 0; i < folders.length; i += 1) {
      const folder = folders[i];
      let globs = (defaultedOptions.directories ?? {})[folder];
      if (!Array.isArray(globs)) {
        globs = [globs];
      }

      const globbedFiles = fg.sync(globs);
      for (let j = 0; j < globbedFiles.length; j += 1) {
        const globbedFile = globbedFiles[j];
        const contents = fs.readFileSync(globbedFile);
        const key = path.join(folder, path.basename(globbedFile));
        if (!defaultedOptions.overwrite && files[key]) {
          done(new Error(`File already exists in build path: ${key}`));
          return;
        }
        debug('including "%s" -> "%s"', globbedFile, key);
        files[key] = {
          contents,
          mode: Mode(fs.statSync(globbedFile)).toOctal(),
        };
      }
    }

    done();
  };
