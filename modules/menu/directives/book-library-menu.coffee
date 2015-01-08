module.exports = [
  ->
    restrict: 'EA'
    template: require('./book-library-menu.jade')
    controller: 'BookLibraryMenuCtrl'
    controllerAs: 'menu'
]
