flip = require('./flip.coffee')

###*
 * @ngdoc  function
 * @name  helpers.mapWith
 * @module  helpers
 * @kind function
 *
 * @description
 * То же, что и _.map, но с изменённым порядком аргументов
 *
 * <div class="alert alert-info">Функция обёрнута в curry</div>
 * @param {Function} fn функция для применения каждому элементу коллекции
 * @param {Array|Object} collection коллекция
 * @return {Array} результат применения функции
###
module.exports = flip(_.map)
