Book = require('../../models/Book.coffee')

module.exports = [
  '$scope', '$route', '$location', 'Storage'
  ($scope, $route, $location, Storage) ->

    _getBookId = ->
      return $route.current.params.id

    _getBookData = (id) ->
      Storage.get('books', {id: id})

    _getBook = (id) ->
      return new Book(_getBookData(id))

    $scope.save = ->
      $scope.book_form.$setSubmitted(true)
      if $scope.book_form.$valid
        Storage.set($scope.book, 'books')
        $location.path('/books')

    $scope.book = _getBook(_getBookId())
]
