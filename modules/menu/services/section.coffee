module.exports = [
  '$location'
  ($location) ->

    class MenuSection

      constructor: (@name, @path) ->
        @current = @isCurrent()

      isCurrent: ->
        $location.path().indexOf(@path) == 0
]
