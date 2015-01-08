require('./services.coffee')
require('./controllers.coffee')
require('./directives.coffee')

app = angular.module('BookLibrary.Menu', [
  'BookLibrary.Menu.Services'
  'BookLibrary.Menu.Controllers'
  'BookLibrary.Menu.Directives'
])
