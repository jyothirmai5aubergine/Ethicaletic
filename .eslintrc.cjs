module.exports = {
  parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: './tsconfig.json',
  tsconfigRootDir: __dirname
  },
  rules: {
    '@typescript-eslint/no-confusing-void-expression': 'warn'
  },
  extends: ['./eslint-config']
}