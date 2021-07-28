module.exports = {
  env: {
    browser: true,
    es2021: true,
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
    'jsx-quotes': 0,
    'react/jsx-fragments': 0,
    'import/no-extraneous-dependencies': 0,
    camelcase: 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'react/prop-types': 0,
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
