import async from 'async';
import deepmerge from 'deepmerge';
import Metalsmith from 'metalsmith';
import os from 'os';
import path from 'path';
import sharp from 'sharp';

export interface Method {
  // TODO(cemmer): the way Sharp exports a namespace doesn't let us be more type strict than 'string'
  name: string;
  args: ((metadata: sharp.Metadata) => unknown[]) | unknown[] | unknown;
}

export interface Options {
  // https://github.com/axe312ger/metalsmith-sharp
  src?: string;
  namingPattern?: string;
  methods?: Method[];
  moveFile?: boolean;
  // New options
  sharp?: sharp.SharpOptions;
  parallelism?: number;
}

function replacePlaceholders(text: string, placeholders: path.ParsedPath): string {
  return text.replace(/\{([^}]+)\}/g, (match, pattern: keyof path.ParsedPath) => {
    if (pattern in placeholders) {
      return placeholders[pattern];
    }
    return match;
  });
}

function getReplacements(filePath: string): path.ParsedPath {
  const parsedPath = path.parse(filePath);
  if (parsedPath.dir.length) {
    parsedPath.dir = `${parsedPath.dir}/`;
  }
  return parsedPath;
}

export default (options: Options | Options[] = []): Metalsmith.Plugin => {
  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-img-sharp');

    (Array.isArray(options) ? options : [options])
      .reduce(async (promise, opts) => {
        await promise;

        const defaultedOptions = deepmerge(
          {
            src: '**/*.@(avif|bmp|gif|heic|jpg|jpeg|png|svg|webp)',
            namingPattern: '{dir}{base}',
            methods: [],
            moveFile: false,
            sharp: {},
            parallelism: os.cpus().length,
          } satisfies Options,
          opts || {},
          { arrayMerge: (destinationArray, sourceArray) => sourceArray },
        );
        debug('running with options: %O', defaultedOptions);

        const imageFiles = metalsmith.match(defaultedOptions.src ?? '**/*', Object.keys(files));

        await async.eachLimit(
          imageFiles,
          defaultedOptions.parallelism,
          async (filename: string): Promise<void> => {
            debug('processing file: %s', filename);

            const file = files[filename];
            const sharpObject = sharp(file.contents, defaultedOptions.sharp);

            for (const method of defaultedOptions.methods) {
              let args: unknown[];
              if (typeof method.args === 'function') {
                args = method.args(await sharpObject.metadata());
              } else if (Array.isArray(method.args)) {
                args = method.args;
              } else {
                args = [method.args];
              }

              // @ts-expect-error Sharp's exported types won't let us be safe here
              sharpObject[method.name](...args);
            }

            file.contents = await sharpObject.toBuffer();

            const filenameReplaced = replacePlaceholders(
              defaultedOptions.namingPattern,
              getReplacements(filename),
            );
            if (filenameReplaced !== filename) {
              // Warning: this can overwrite files without warning
              files[filenameReplaced] = file;

              if (defaultedOptions.moveFile) {
                delete files[filename];
              }
            }
          },
        );
      }, Promise.resolve())
      .then(() => done())
      .catch(done);
  };
};
