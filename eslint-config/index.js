// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  overrides: [
  ],
  extends: [
    'standard-with-typescript'
  ],
  plugins: [
    'eslint-plugin-import-helpers',
    'react-hooks'
  ],
  rules: {
    '@typescript-eslint/indent': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err'
      }
    ],
    eqeqeq: ['warn', 'always'],
    'no-nested-ternary': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true
      }
    ],
    'no-param-reassign': [
      2,
      {
        props: false
      }
    ],
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'space-before-function-paren': 0,
    '@typescript-eslint/comma-dangle': ['off'],
    'react/jsx-props-no-spreading': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
}

/*
  https://eslint.org/docs/latest/rules/
  `
  "off" or 0 - turn the rule off
  "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
  `
  */
