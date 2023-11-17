import collections, { CollectionConfig } from '@metalsmith/collections';
import deepmerge from 'deepmerge';
import Metalsmith from 'metalsmith';

type MetalsmithMetadata = { [key: string]: unknown };
type MetalsmithMetadataWithCollections = MetalsmithMetadata & {
  collections?: { [key: string]: Metalsmith.File }
};

// https://github.com/metalsmith/collections/blob/362c20c6814b626850a41f8d245cde81f5af66df/lib/index.d.ts#L48-L50
type MetalsmithCollectionsOptions = {
  [x: string]: CollectionConfig | string
};

export interface Options {
  pattern: string,
  key?: string,
  collection: string,
  settings: CollectionConfig
}

interface DefaultedOptions extends Options {
  key: string,
}

export default (options: Options): Metalsmith.Plugin => async (files, metalsmith, done) => {
  const defaultedOptions = deepmerge({
    key: '{val}',
  }, options || {}) as DefaultedOptions;

  const debug = metalsmith.debug('metalsmith-multi-collections');
  debug('running with options: %O', defaultedOptions);

  // Generate the @metalsmith/collections config file
  const collectionsConfig: MetalsmithCollectionsOptions = {};
  // For every file that has `key` present as a metadata filed...
  metalsmith.match(defaultedOptions.pattern, Object.keys(files))
    .filter((filename) => files[filename][defaultedOptions.key])
    .forEach((filename) => {
      const file = files[filename];

      // Coerce the metadata value into an array
      const fileValue = file[defaultedOptions.key];
      (Array.isArray(fileValue) ? fileValue : [fileValue]).forEach((value) => {
        // Generate the collection name
        const collection = defaultedOptions.collection.replace('{val}', value);

        // Add the generated collection name in the file's metadata, which will cause the
        // @metalsmith/collections execution below to create this collection
        const fileCollection = files[filename].collection as string[] | undefined;
        files[filename].collection = [...(fileCollection || []), collection];

        // Build the settings for @metalsmith/collections
        collectionsConfig[collection] = defaultedOptions.settings;
      });
    });
  debug('generated collections: %O', Object.keys(collectionsConfig));

  // Clear side effect data from previous @metalsmith/collections,
  //  otherwise we could end up with duplicate pages in collections
  const metadata = metalsmith.metadata() as MetalsmithMetadataWithCollections;
  Object.keys(metadata.collections || {})
    .forEach((collection) => {
      if (metadata[collection]) {
        delete metadata[collection];
      }
    });

  // Snapshot any collections we didn't intend to change
  //  @metalsmith/collections will end up overwriting them and forgetting previous settings
  const collectionsSnapshot = Object.keys(metadata.collections || [])
    .filter((collection) => !collectionsConfig[collection])
    .reduce((acc, collection) => ({
      ...acc,
      [collection]: (metadata.collections || {})[collection],
    }), {} as { [key: string]: Metalsmith.File });

  // Run @metalsmith/collections
  collections(collectionsConfig)(files, metalsmith, (...args) => {
    // Restore collections we didn't intend to change
    Object.keys(collectionsSnapshot)
      .forEach((collection) => {
        if (!metadata.collections) {
          metadata.collections = {};
        }
        metadata.collections[collection] = collectionsSnapshot[collection];
      });

    const collections = metadata.collections || {};
    metadata.collections = Object.keys(collections)
      .sort()
      .reduce((dict, collection) => {
        dict[collection] = collections[collection];
        return dict;
      }, {} as {[key: string]: Metalsmith.File});

    done(...args);
  });
};
