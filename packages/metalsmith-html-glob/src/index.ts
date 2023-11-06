import cheerio from 'cheerio';
import deepmerge from 'deepmerge';
import url from 'url';
import Metalsmith from "metalsmith";

interface Options {
    html?: string,
    tags?: {[key: string]: string[] | string}
}

export default (options: Options = {}): Metalsmith.Plugin => {
  const defaultedOptions = deepmerge({
    html: '**/*.html',
    tags: {
      a: 'href',
      img: ['src', 'data-src'],
      link: 'href',
      script: 'src',
    },
  } satisfies Options, options || {});

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-github-profile');
    debug('running with options: %O', defaultedOptions);

    // For each HTML file that matches the given pattern
    metalsmith.match(defaultedOptions.html, Object.keys(files))
      .forEach((filename) => {
        debug('processing file: %s', filename);

        const file = files[filename];
        const $ = cheerio.load(file.contents);

        // For each given tag
        Object.keys(defaultedOptions.tags)
          .forEach((tag) => {
            let attributes = defaultedOptions.tags[tag] ?? [];
            if (!Array.isArray(attributes)) {
              attributes = [attributes];
            }

            attributes.forEach((attribute) => {
              const selector = `${tag}[${attribute}][${attribute}!='']`;

              // For each matching element for the tag in the file
              $(selector).each((i, elem) => {
                const resourceGlob = $(elem).attr(attribute);
                if (!resourceGlob) {
                    return;
                }

                // Ignore non-local resources
                const resourceURL = url.parse(resourceGlob);
                if (resourceURL.protocol) {
                  return;
                }

                // Get rid of leading slash
                const relativeGlob = resourceGlob.replace(/^\//, '');

                // Ignore resources that already resolve successfully
                if (relativeGlob in files) {
                  return;
                }

                // Ignore empty patterns
                if (!relativeGlob.trim()) {
                  return;
                }

                // Find all input files matching the glob in the tag
                const normalizedFilenames = Object.keys(files)
                  .map((resource) => resource.replace(/[/\\]/g, '/'));
                const resources = metalsmith.match(relativeGlob, normalizedFilenames)
                  .map((resource) => resource.replace(/[/\\]/g, '/'))
                  .sort()
                  .map((resource) => $(elem).clone().attr(attribute, `/${resource}`));

                // If files are found, add them and remove the original tag
                if (resources.length) {
                  debug('  "%s" with value "%s" found: %O', selector, resourceGlob, resources);
                  resources
                    .forEach((resource) => {
                      resource.insertBefore($(elem));
                    });
                  $(elem).remove();
                }
              });
            });
          });

        file.contents = Buffer.from($.html());
      });

    done(null, files, metalsmith);
  };
};
