module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'standard',
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-shorthand': ['error', 'always'],
    'no-empty': 'error',
    'no-extra-semi': 'error',
    'no-return-await': 'warn',
    'newline-after-var': ['error', 'always'],
    'import/newline-after-import': 'error',
    semi: ['error', 'always'],
    'no-useless-constructor': 'off',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'never',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'promise/prefer-await-to-then': 'error',
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'function-call-argument-newline': [
      'error',
      'consistent',
    ],
    'sort-imports': ['error', {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: false,
    }],
    'multiline-ternary': 'off',
  },
};
