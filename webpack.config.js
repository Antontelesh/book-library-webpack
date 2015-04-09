var webpack = require('webpack');
var path = require('path');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common', 'common.js', 2);

module.exports = ['ru_UK', 'ua_UK'].map(function(lang) {

  var langParts = lang.split('_'),
      language = langParts[0],
      locale = langParts[1];

  return {

    entry: {
      'authors': './modules/authors',
      // 'tags': './modules/tags',
      // 'genres': './modules/genres',
      'main': './modules/main/index.coffee',
      'books': './modules/books/index.coffee',
      'authors': './modules/authors/index.coffee',
      'book-form': './modules/book-form/index.coffee'
    },

    output: {
      'path': 'bundle/'+lang +'/',
      'filename': '[name].js',
      'publicPath': '/bundle/' + lang + '/'
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
        {test: /\.ts$/, loader: 'typescript'},
        {test: /\.jade$/, loader: 'jade'},
        {test: /\.scss$/, loader: 'style!css!sass'}
      ]
    },

    plugins: [
      commonsPlugin,
      new webpack.DefinePlugin({
        LANG: JSON.stringify(lang),
        LANGUAGE: JSON.stringify(language),
        LOCALE: JSON.stringify(locale)
      }),
      new webpack.optimize.UglifyJsPlugin({mangle: true})
    ]

  }

});
