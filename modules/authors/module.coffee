require('./controllers.coffee')
require('./authors.scss')

app = angular.module('BookLibrary.Authors', [
  'BookLibrary.Storage'
  'BookLibrary.Authors.Controllers'
])
