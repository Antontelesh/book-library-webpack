require('./controllers.coffee')

app = angular.module('BookLibrary.Books', [
  'BookLibrary.Storage'
  'BookLibrary.Books.Controllers'
])
