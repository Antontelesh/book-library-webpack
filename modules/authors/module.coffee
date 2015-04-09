require('./controllers.coffee')
require('./authors.scss')

###*
 * @ngdoc overview
 * @name BookLibrary.Authors
 * @module  BookLibrary
 *
 * @description
 * Модуль для отображения списка авторов
 *
###
app = angular.module('BookLibrary.Authors', [
  'BookLibrary.Storage'
  'BookLibrary.Authors.Controllers'
])
