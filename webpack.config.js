var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    alias: {
      marionette: 'backbone.marionette'
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [path.resolve('src')],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]]
        }
      }]
    },
    {test: /\.html$/, loader: 'html-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: __dirname + '/build/index.html',
      template: __dirname + '/index.html'
    }),

    new CopyWebpackPlugin([
      { from: 'assets/*' },
      { from: 'src/styles.css' }
    ])
  ]
};