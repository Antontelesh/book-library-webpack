###*
 * @ngdoc function
 * @name helpers.either
 * @module  helpers
 * @kind function
 *
 * @description
 * Возвращает второй аргумент, если он != null. Иначе возвращает первый аргумент.
 * Используется для программирования в функциональном стиле.
 *
 * <div class="alert alert-info">Функция обёрнута в curry</div>
 *
 * @param  {any} def значение по-умолчанию
 * @param  {any} val значение для сравнения с null
 * @return {any}     возвращает val, если val != null. Иначе возвращает def
###
module.exports = _.curry (def, val) ->
  return val || def
