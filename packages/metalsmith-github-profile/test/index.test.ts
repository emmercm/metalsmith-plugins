import { describe, expect, it, jest as requiredJest } from '@jest/globals';
import assertDir from 'assert-dir-equal';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'fs';
import handlebars from 'handlebars';
import Metalsmith from 'metalsmith';
import hbtmd from 'metalsmith-hbt-md';
import { join } from 'path';

import githubProfile, { Options } from '../index.js';

requiredJest.setTimeout(30 * 1000);

interface Config {
  options: Options;
  error?: string;
}

const test = (dir: string, config: Config) => {
  describe(dir, () => {
    // Allow src directory to not exist / be empty and not committed
    if (!existsSync(`${dir}/src`)) {
      mkdirSync(`${dir}/src`);
    }

    it('should build', async () => {
      try {
        await Metalsmith(`${dir}`)
          // Run the plugin
          .use(
            githubProfile({
              ...config.options,
              // GitHub Actions mitigation for API rate limits
              authorization: {
                username: process.env.GITHUB_ACTOR || undefined,
                token: process.env.GITHUB_TOKEN || undefined,
              },
            }),
          )
          .use(hbtmd(handlebars))
          // Test the output
          .build();
      } catch (err) {
        if (config.error) {
          expect((err ?? '').toString()).toMatch(config.error);
        } else {
          expect(err).toBeNull();
        }
        return;
      }

      assertDir(`${dir}/build`, `${dir}/expected`, { filter: () => true });
    });
  });
};

describe('metalsmith-github-profile', () => {
  const dirs = (p: string) =>
    readdirSync(p)
      .map((f) => join(p, f))
      .filter((f) => statSync(f).isDirectory());
  dirs('test/fixtures').forEach((dir) => {
    const config = existsSync(`${dir}/config.json`)
      ? JSON.parse(readFileSync(`${dir}/config.json`).toString())
      : {};
    test(dir, config);
  });
});
