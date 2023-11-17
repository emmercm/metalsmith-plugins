import { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: 'node',

  // BEGIN https://kulshekhar.github.io/ts-jest/docs/guides/esm-support
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    // END https://kulshekhar.github.io/ts-jest/docs/guides/esm-support

    // Fix @metalsmith/collections
    '@metalsmith/collections': require.resolve('@metalsmith/collections').replace('.cjs', '.js'),
  },

  resolver: '<rootDir>/../../jest.resolver.cjs',

  // Don't run any compiled versions of the tests, if they exist
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};

export default jestConfig;
