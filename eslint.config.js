import pluginCypress from 'eslint-plugin-cypress/flat';
import globals from 'globals';

export default [
  pluginCypress.configs.recommended,
  {
    files: ['cypress/**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/assertion-before-screenshot': 'warn',
    },
  },
];
