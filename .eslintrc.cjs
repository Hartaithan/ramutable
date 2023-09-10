const process = require('node:process');

process.env.ESLINT_TSCONFIG = 'tsconfig.json';

module.exports = {
  extends: '@antfu',
  rules: {
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
  },
};
