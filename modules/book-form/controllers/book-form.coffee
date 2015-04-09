Book = require('../../models/Book.coffee')

###*
 * @ngdoc controller
 * @name BookLibrary.BookForm.BookFormCtrl
 * @module  BookLibrary.BookForm
 *
 * @description
 * Контроллер для логики формы создания/редактирования книги
 *
 * @property {Book} book текущая модель книги
 * @method save Сохраняет данные модели
###
module.exports = [
  '$scope', '$route', '$location', 'Storage'
  ($scope, $route, $location, Storage) ->

    _getBookId = ->
      return $route.current.params.id

    _getBookData = (id) ->
      Storage.get('books', {id: id})

    _getBook = (id) ->
      return new Book(_getBookData(id))

    ###*
     * @ngdoc method
     * @name BookLibrary.BookForm.BookFormCtrl#save
     * @module  BookLibrary.BookForm
     * @methodOf BookLibrary.BookForm.BookFormCtrl
     * @description
     * Сохраняет состояние модели в Storage.
     * Редиректит на список книг.
    ###
    $scope.save = ->
      $scope.book_form.$setSubmitted(true)
      if $scope.book_form.$valid
        Storage.set($scope.book, 'books')
        $location.path('/books')

    $scope.book = _getBook(_getBookId())
]
