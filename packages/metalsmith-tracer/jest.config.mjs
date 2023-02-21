/**
 * @see https://github.com/facebook/jest/issues/12270#issuecomment-1153431782
 */

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const dir = join(dirname(fileURLToPath(import.meta.url)));

const jestConfig = {
  // ...
  resolver: join(dir, 'resolver.cjs'),
};
export default jestConfig;
