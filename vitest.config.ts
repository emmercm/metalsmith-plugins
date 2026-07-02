import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    sequence: {
      shuffle: true,
    },

    // Never run the compiled output; only the TypeScript sources
    exclude: [...configDefaults.exclude, '**/dist/**'],

    // Default Jest behavior
    reporters: ['verbose'],
    watch: false,
    passWithNoTests: true,

    testTimeout: 30_000,
  },
});
