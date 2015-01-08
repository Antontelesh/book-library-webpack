var webpack = require('webpack');
var path = require('path');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common', 'common.js', 2);

// var providePlugin = new webpack.ProvidePlugin({
//     angular: 'exports?window.angular!' + path.join(__dirname, 'bower_components/angular/angular.min.js'),
//     _: 'exports?window._!' + path.join(__dirname, 'bower_components/lodash/dist/lodash.min.js')
// });

var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  mangle: false
})

module.exports = {

  entry: {
    // 'authors': './modules/authors',
    // 'tags': './modules/tags',
    // 'genres': './modules/genres',
    'main': './modules/main/index.coffee',
    'books': './modules/books/index.coffee',
    'authors': './modules/authors/index.coffee',
    'book-form': './modules/book-form/index.coffee'
  },

  output: {
    'path': 'bundle',
    'filename': '[name].js',
    'publicPath': '/bundle/'
  },

  resolve: {
    root: __dirname,
    alias: {
      helpers: __dirname + '/helpers'
    }
  },

  module: {
    loaders: [
      {test: /\.coffee$/, loader: 'coffee'},
      {test: /\.jade$/, loader: 'jade'},
      {test: /\.scss$/, loader: 'style!css!sass'}
    ]
  },

  plugins: [
    commonsPlugin,
    // providePlugin,
    // uglifyPlugin
  ]

};
