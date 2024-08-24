import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  {
    files: ['tests/**/*'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
