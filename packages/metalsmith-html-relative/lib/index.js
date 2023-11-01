import path from 'path';
import url from 'url';

import cheerio from 'cheerio';
import deepmerge from 'deepmerge';

export default (options = {}) => {
  const defaultedOptions = deepmerge({
    html: '**/*.html',
    tags: {
      a: 'href',
      img: ['src', 'data-src'],
      link: 'href',
      script: 'src',
      form: 'action',
    },
  }, options || {});

  return (files, metalsmith, done) => {
    const debug = metalsmith.debug('metalsmith-html-relative');
    debug('running with options: %O', defaultedOptions);

    // For each HTML file that matches the given pattern
    metalsmith.match(defaultedOptions.html, Object.keys(files))
      .forEach((filename) => {
        debug('processing file: %s', filename);

        const file = files[filename];
        const normalizedFilename = filename.replace(/[/\\]/g, path.sep);
        const $ = cheerio.load(file.contents);

        // For each given tag
        Object.keys(defaultedOptions.tags)
          .forEach((tag) => {
            let attributes = defaultedOptions.tags[tag];
            if (!Array.isArray(attributes)) {
              attributes = [attributes];
            }

            attributes.forEach((attribute) => {
              const selector = `${tag}[${attribute}][${attribute}!='']`;

              // For each matching element for the tag in the file
              $(selector).each((i, elem) => {
                const resource = $(elem).attr(attribute);

                // Ignore non-local resources
                const resourceURL = url.parse(resource);
                if (resourceURL.protocol) {
                  return;
                }

                // Ignore anchor links
                if (resource.startsWith('#')) {
                  return;
                }

                // Find the absolute path of the resource
                let absoluteResource = resource;
                if (!resource.startsWith('/')) {
                  absoluteResource = path.join(path.dirname(normalizedFilename), resource)
                    .normalize();
                }
                absoluteResource = absoluteResource.replace(/^[/\\]+/, '');

                // Find the relative path of the resource
                const relativeResource = path.relative(path.dirname(normalizedFilename), absoluteResource).replace(/[/\\]/g, '/') || '.';

                debug('  "%s" changed to: %s', resource, relativeResource);
                $(elem).attr(attribute, relativeResource);
              });
            });
          });

        file.contents = Buffer.from($.html());
      });

    done();
  };
};
