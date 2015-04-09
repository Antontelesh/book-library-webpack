###*
 * @ngdoc function
 * @name helpers.isNully
 * @module helpers
 * @kind function
 *
 * @description
 * Проверяет значение на нестрогое равенство null
 *
 *
 * @param {any} val значение для проверки
 * @return {Boolean} Признак равенства значения null
###
module.exports = (val) ->
  return val?
