app = angular.module('BookLibrary.Menu.Services', [])

app.factory('MenuSections', require('./services/menu-sections.coffee'))
app.factory('MenuSection', require('./services/section.coffee'))
