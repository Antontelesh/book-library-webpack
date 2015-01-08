module.exports = [
  '$scope', 'Storage', '$route'
  ($scope, Storage, $route) ->

    _getCurrentOrder = ->
      return $scope.params.order || 'title'

    _getFilters = ->
      return _.omit($scope.params, ['order'])

    $scope.params = $route.current.params
    $scope.filters = _getFilters()
    $scope.order = _getCurrentOrder()
    $scope.books = Storage.getAll('books')

]
