module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'new-cap': 1,
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }]
  }
};
