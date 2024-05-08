module.exports = {
  globals: {
    React: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',

    'plugin:import/recommended',
    'plugin:import/typescript',

    'prettier',
    'plugin:prettier/recommended',

    'plugin:tailwindcss/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import', 'simple-import-sort'],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },

    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
  root: true,
};