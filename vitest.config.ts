import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    sequence: {
      shuffle: true,
    },

    // Default Jest behavior
    reporters: ['verbose'],
    watch: false,
    passWithNoTests: true,

    testTimeout: 30_000,
  },
});
