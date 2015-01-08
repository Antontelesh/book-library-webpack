app = angular.module('BookLibrary.Menu.Controllers', [
  'BookLibrary.Menu.Services'
])

app.controller('BookLibraryMenuCtrl', require('./controllers/book-library-menu.coffee'))
