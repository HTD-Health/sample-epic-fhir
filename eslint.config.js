module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:all',
    'plugin:react/all',
    'react',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsx: true,
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/semi': 1,
    semi: [1, 'always'],
    'arrow-body-style': [0, 'always'],
    'object-curly-newline': 0,
    'no-unused-vars': 1,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-expression',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
