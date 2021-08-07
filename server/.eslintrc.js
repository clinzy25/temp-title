module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'operator-linebreak': 0,
    'no-unused-vars': ['error', { args: 'none' }],
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
