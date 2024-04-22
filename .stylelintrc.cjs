'use strict';

module.exports = {
  extends: [
    'stylelint-config-recommended',
    /*
     * Prettier plugin is not needed
     * https://stylelint.io/migration-guide/to-15/#deprecated-stylistic-rules
     */
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply', 'config'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],
    'no-descending-specificity': null,
  },
  overrides: [
    {
      files: ['*.svelte', '**/.svelte'],
      customSyntax: 'postcss-html',
    },
  ],
};
