const path = require('path');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app', 'client');
const BUILD_PATH = path.resolve(ROOT_PATH, 'app', 'assets', 'javascripts');

module.exports = {
  entry: APP_PATH,

  resolve: {
    extensions: ['.js', '.jsx']
  },

  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: APP_PATH,
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' })
  ]
};
