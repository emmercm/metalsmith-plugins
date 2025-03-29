import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jest from 'eslint-plugin-jest';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['coverage/**', 'dist/**', 'test/fixtures/**'],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended', // MUST BE LAST!
  ),
  {
    files: ['**/*.ts'],

    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
      jest,
    },

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      sourceType: 'module',

      globals: {
        ...jest.environments.globals.globals,
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
];
