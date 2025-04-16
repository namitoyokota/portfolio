import js from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import eslintConfigPrettier from 'eslint-config-prettier';
import boundaries from 'eslint-plugin-boundaries';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'src/vite-env.d.ts'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...pluginQuery.configs['flat/recommended'],
      eslintConfigPrettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      'boundaries/elements': [
        {
          type: 'layouts',
          pattern: 'src/layouts/*',
          mode: 'full',
        },
        {
          type: 'modules',
          pattern: 'src/modules/*/**/*',
          mode: 'full',
          capture: ['featureName'],
        },
        {
          type: 'root',
          pattern: 'src/main.tsx',
          mode: 'full',
        },
        {
          type: 'shared',
          pattern: 'src/shared/*/**/*',
          mode: 'full',
        },
        {
          type: 'styles',
          pattern: 'src/styles/*',
          mode: 'full',
        },
      ],
      'boundaries/include': ['src/**/*'],
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: 'tsconfig.app.json',
        },
      },
      'react': { version: '19.0' },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      boundaries,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...jsxA11y.configs.strict.rules,
      ...reactHooks.configs.recommended.rules,
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: 'layouts',
              allow: ['modules'],
            },
            {
              from: ['modules'],
              allow: ['shared', ['modules', { featureName: '${from.featureName}' }]],
            },
            {
              from: 'root',
              allow: ['layouts', 'styles'],
            },
            {
              from: ['shared'],
              allow: ['shared'],
            },
          ],
        },
      ],
      'curly': ['warn', 'all'],
      'eqeqeq': ['warn', 'smart'],
      'padding-line-between-statements': [
        'warn',
        {
          blankLine: 'always',
          prev: 'block-like',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ],
      'no-console': ['warn', { allow: ['error', 'info'] }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: ['typeLike', 'enumMember'],
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/prefer-literal-enum-member': 'off',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@tanstack/query/exhaustive-deps': 'off',
    },
  },
);
