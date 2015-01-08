require('../commons/index.coffee')
require('exports!../../bower_components/angular-route/angular-route.min.js')
require('exports!oclazyload')
require('../validation/index.coffee')
require('../storage/index.coffee')
require('../menu/index.coffee')


app = angular.module('BookLibrary', [
  'ngRoute'
  'oc.lazyLoad'
  'BookLibrary.Validation'
  'BookLibrary.Menu'
])

app.config([
  '$routeProvider', '$controllerProvider', '$provide', '$filterProvider'
  ($routeProvider, $controllerProvider, $provide, $filterProvider) ->


    $routeProvider
      .when('/books/:id', {
        template: require('../book-form/book-form.jade')
        controller: 'BookFormCtrl'
        resolve: [
          '$ocLazyLoad'
          ($ocLazyLoad) ->
            return $ocLazyLoad.load({
              name: 'BookLibrary.BookForm'
              files: ['/bundle/book-form.js']
            })
        ]
      })
      .when('/books/create', {
        template: require('../book-form/book-form.jade')
        controller: 'BookFormCtrl'
        resolve: [
          '$ocLazyLoad'
          ($ocLazyLoad) ->
            return $ocLazyLoad.load({
              name: 'BookLibrary.BookForm'
              files: ['/bundle/book-form.js']
            })
        ]
      })
      .when('/books', {
        template: require('../books/books.jade')
        controller: 'BooksCtrl'
        resolve: [
          '$ocLazyLoad'
          ($ocLazyLoad) ->
            return $ocLazyLoad.load({
              name: 'BookLibrary.Books'
              files: ['/bundle/books.js']
            })
        ]
      })
      .when('/authors', {
        template: require('../authors/authors.jade')
        controller: 'AuthorsCtrl'
        resolve: [
          '$ocLazyLoad'
          ($ocLazyLoad) ->
            return $ocLazyLoad.load({
              name: 'BookLibrary.Authors'
              files: ['/bundle/authors.js']
            })
        ]
      })
      .otherwise({
        redirectTo: '/books'
      })
])

angular.element(document).ready ->
  angular.bootstrap(document.body, ['BookLibrary'])
