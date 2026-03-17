'use strict';

const globals = require('globals');

const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const vitest = require('@vitest/eslint-plugin');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  {
    ignores: ['coverage/**', 'dist/**', 'test/fixtures/**'],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // MUST BE LAST!
  ),
  {
    files: ['**/*.ts'],

    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
      vitest,
    },

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      sourceType: 'module',

      globals: {
        ...vitest.environments.env.globals,
      },
    },

    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',

      'jest/no-conditional-expect': 'off',
      'jest/no-done-callback': 'off', // TODO(cemmer)
      'jest/valid-title': 'off', // TODO(cemmer)

      'no-param-reassign': ['error', { props: false }],
    },
  },
  {
    files: ['**/fixtures/**/*.js'],
    rules: {
      strict: 'off',
    },
  },

  // TODO(cemmer): rename this file to .mjs, convert to module syntax, add type:module to
  //  package.json, and fix the resulting Jest error
  {
    files: ['**/*.cjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];
