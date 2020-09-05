module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    jsdom: true,
    Promise: true,
    Set: true,
    Map: true,
    nw: true
  },
  plugins: [
    'jest',
    'jsdoc',
    'markdown'
  ],
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:jest/recommended',
    'tjw-base'
  ],
  rules: {
    'no-restricted-syntax': [
      'error',
      'Property[method="true"]'
    ]
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        property: 'prop',
        returns: 'return'
      }
    }
  }
};
