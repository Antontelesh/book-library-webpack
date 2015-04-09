flip = require('./flip.coffee')

###*
 * @ngdoc function
 * @name helpers.findWith
 * @module  helpers
 * @kind function
 *
 * @description
 * Аналогично _.find, только измененён порядок аргументов
 *
 * <div class="alert">Функция обёрнута в curry</div>
 *
 * @param {function} fn функция для сравнения элементов коллекции
 * @param {array|object} collection коллекция для поиска
 * @return {any} значение первого найденного элемента в коллекции
###
module.exports = flip(_.find)
