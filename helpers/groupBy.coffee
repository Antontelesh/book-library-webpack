flip = require('./flip.coffee')

###*
 * @ngdoc function
 * @name helpers.groupBy
 * @module helpers
 * @kind function
 *
 * @description
 * То же, что и _.groupBy, только с изменённым порядком аргументов
 *
 * <div class="alert alert-info">Функция обёрнута в curry</div>
 *
 * @param {Function} fn функция для определения признака группировки
 * @param {Array|Object} collection коллекция для группировки
###
module.exports = flip(_.groupBy)
