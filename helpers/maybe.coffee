isNully = require('./isNully.coffee')

###*
 * @ngdoc function
 * @name helpers.maybe
 * @module  helpers
 * @kind function
 *
 * @description
 * Применяет функцию к аргументам, если они != null
 *
 * @param  {Function} fn функция для применения к значению
 * @return {Function}    функция, вызов которой применяет переданную функцию к аргументам, если они != null
###
module.exports = (fn) ->
  return (args...) ->
    if args.length && !_.some(args, isNully)
      return fn.apply(this, args)
