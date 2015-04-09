mapWith = require('helpers/mapWith.coffee')
groupBy = require('helpers/groupBy.coffee')

Author = (books, name) ->
  name: name
  books: books

getAuthors = _.compose(mapWith(Author), groupBy('author'))

###*
 * @ngdoc controller
 * @name BookLibrary.Authors.AuthorsCtrl
 * @module  BookLibrary.Authors
 *
 * @description
 * Формирует массив авторов для отображения в шаблоне
 *
 * @property {array} authors Массив авторов в формате
 * ```
 * <pre>
 *   {
 *     name: {string},
 *     books: {array}
 *   }
 * </pre>
 * ```
###
controller = ($scope, Storage) ->
  $scope.authors = getAuthors(Storage.getAll('books'))

controller.$inject = ['$scope', 'Storage']
module.exports = controller

