module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'eslint-plugin-no-spread1optcall',
  ],
  env: {
    node: true,
    es2020: true,
  },
  rules: {
    'no-spread1optcall/no-spread1optcall': 'error',
  },
};
