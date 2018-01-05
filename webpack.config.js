const webpack = require('webpack');

module.exports = {
  entry: [
    `${__dirname}/src/index.js`,
  ],
  output: {
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
    path: `${__dirname}/dist`,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
};
