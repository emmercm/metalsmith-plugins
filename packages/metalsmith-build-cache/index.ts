import crypto from 'crypto';
import fs from 'fs';
import Metalsmith from 'metalsmith';
import path from 'path';

export interface Options {
  cachePath?: string;
}

export default {
  metalsmith(realMetalsmith: Metalsmith, options: Options = {}): Metalsmith {
    const { run } = realMetalsmith;
    // @ts-expect-error Metalsmith.run()'s three different signatures makes TypeScript mad here
    realMetalsmith.run = async (
      inputFiles: Metalsmith.Files,
      argTwo: Metalsmith.Callback | Metalsmith.Plugin[] | undefined,
      argThree: Metalsmith.Callback | undefined,
    ) => {
      const plugins = Array.isArray(argTwo) ? argTwo : [];
      const callback = typeof argTwo === 'function' ? argTwo : argThree;

      // Hash the input file paths and their contents
      const hash = crypto.createHash('md5');
      hash.update(plugins.length.toString());
      Object.keys(inputFiles)
        .sort()
        .forEach((fileName) => {
          hash.update(fileName).update(inputFiles[fileName].contents);
        });
      const filesHash = hash.digest('hex');

      // Build a "marker" filename using the hash above
      const cachePath = path.join(
        realMetalsmith.directory(),
        options.cachePath ??
          path.join(
            '.cache',
            path.relative(realMetalsmith.directory(), realMetalsmith.destination()),
          ),
      );
      const cacheMarkerFile = path.join(cachePath, '.metalsmith-build-cache-' + filesHash);

      try {
        // Check for the existence of the marker file
        await fs.promises.lstat(cacheMarkerFile);

        // The marker file exists, therefore the cache is valid, so return the cache
        return Metalsmith(cachePath)
          .source('')
          .ignore(path.basename(cacheMarkerFile))
          .destination(realMetalsmith.destination())
          .clean(realMetalsmith.clean())
          .build();
      } catch {
        /* ignored */
      }
      // The marker file does not exist, therefore the cache is either invalid or doesn't exist,
      // so run the build like normal

      // Process all input files
      const outputFiles = await run.apply(realMetalsmith, [inputFiles]);

      // Write the cache directory and the marker file
      await fs.promises.rm(cachePath, { recursive: true, force: true });
      await Metalsmith(realMetalsmith.directory())
        .destination(cachePath)
        .clean(true)
        .write(outputFiles);
      await fs.promises.writeFile(cacheMarkerFile, '');

      if (callback) {
        callback(null, outputFiles);
      } else {
        return outputFiles;
      }
    };
    return realMetalsmith;
  },

  // TODO(cemmer): plugin(plugin: Metalsmith.Plugin): Metalsmith {}
};
