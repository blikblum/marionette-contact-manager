var path = require('path');

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
  }
};