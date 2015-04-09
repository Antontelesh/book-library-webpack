require('../commons/index.coffee')
require('exports!../../bower_components/angular-route/angular-route.min.js')
require('exports!oclazyload')
require('../storage/index.coffee')
require('../validation/index.coffee')
require('../menu/index.coffee')

app = angular.module('BookLibrary', [
  'ngRoute'
  'oc.lazyLoad'
  'BookLibrary.Storage'
  'BookLibrary.Validation'
  'BookLibrary.Menu'
])

app.config([
  '$routeProvider'
  ($routeProvider) ->


    $routeProvider
      .when('/books/:id', {
        template: require('../book-form/book-form.jade')
        controller: 'BookFormCtrl'
        resolve:
          module: [
            '$ocLazyLoad'
            ($ocLazyLoad) ->
              return $ocLazyLoad.load({
                name: 'BookLibrary.BookForm'
                files: ['/bundle/'+(LANG)+'/book-form.js']
              })
          ]
      })
      .when('/books/create', {
        template: require('../book-form/book-form.jade')
        controller: 'BookFormCtrl'
        resolve:
          module: [
            '$ocLazyLoad'
            ($ocLazyLoad) ->
              return $ocLazyLoad.load({
                name: 'BookLibrary.BookForm'
                files: ['/bundle/'+(LANG)+'/book-form.js']
              })
          ]
      })
      .when('/books', {
        template: require('../books/books.jade')
        controller: 'BooksCtrl'
        resolve:
          module: [
            '$ocLazyLoad'
            ($ocLazyLoad) ->
              return $ocLazyLoad.load({
                name: 'BookLibrary.Books',
                files: ['/bundle/'+(LANG)+'/books.js']
              })
          ]
      })
      .when('/authors', {
        template: require('../authors/authors.jade')
        controller: 'AuthorsCtrl'
        resolve:
          module: [
            '$ocLazyLoad'
            ($ocLazyLoad) ->
              return $ocLazyLoad.load({
                name: 'BookLibrary.Authors'
                files: ['/bundle/'+(LANG)+'/authors.js']
              })
          ]
      })
      .otherwise({
        redirectTo: '/books'
      })
])

app.run(['$rootScope'
  ($rootScope) ->
    $rootScope.lang = require('../../helpers/lang.coffee');
])

angular.element(document).ready ->
  angular.bootstrap(document.body, ['BookLibrary'])
