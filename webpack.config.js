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
    loaders: [
      {test: /\.html$/, loader: 'html'},
      {
        test: /\.js$/, loader: 'babel?presets[]=es2015', include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: __dirname + '/build/index.html',
      template: __dirname + '/index.html'
    }),

    new CopyWebpackPlugin([
      {from: 'assets/*'},
      {from: 'src/styles.css'}
    ])
  ]
};