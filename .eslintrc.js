module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@yuzulabo',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  env: {
    node: true
  }
};
