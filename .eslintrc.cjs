module.exports = {
  parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: './tsconfig.json',
  tsconfigRootDir: __dirname
  },
  extends: ['./eslint-config']
}
