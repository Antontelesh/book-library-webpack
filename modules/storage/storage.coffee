propOf = require('helpers/propOf.coffee')
either = require('helpers/either.coffee')

module.exports = [
  '$window'
  ($window) ->

    storage = $window.localStorage

    _getRaw = propOf(storage)

    _read = _.compose(angular.fromJson, either('[]'), _getRaw)

    _write = (collection, data) ->
      storage[collection] = angular.toJson(data)

    _getNewId = ->
      return new Date().valueOf().toString()

    _get = (collection, comparator) ->
      return _.find(_read(collection), comparator)

    _set = (item, collection) ->
      if item.id
        return _update(item, collection)
      return _store(item, collection)

    _store = (item, collection) ->
      item.id = _getNewId()
      _write(collection, _read(collection).concat(item))

    _update = (item, collection) ->
      data = _read(collection)
      index = _.findIndex(data, {id: item.id})
      if index > -1
        data[index] = item
        _write(collection, data)

    _delete = (collection, comparator) ->
      data = _.without(_read(collection), comparator)
      _write(collection, data)

    _clear = (collection) ->
      storage[collection] = undefined

    _setStorage = (container) ->
      storage = container

    getAll: _read
    get: _get
    set: _set
    update: _write
    remove: _delete
    clear: _clear
    setStorage: _setStorage
]
