// This rule was deprecated in ESLint v7.0.0. (Source: https://eslint.org/docs/rules/global-require)
/* eslint-disable global-require */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
  ],
};
/* eslint-enable global-require */
