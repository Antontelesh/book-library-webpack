require('./controllers.coffee')

app = angular.module('BookLibrary.BookForm', [
  'BookLibrary.Storage'
  'BookLibrary.BookForm.Controllers'
])
