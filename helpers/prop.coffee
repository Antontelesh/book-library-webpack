###*
 * @ngdoc function
 * @name helpers.prop
 * @module helpers
 *
 * @description
 * Получает значение в коллекции по предоставленному ключу.
 *
 * <div class="alert alert-info">Функция обёрнута в curry</div>
 *
 * @param  {String|Number} prop ключ/индекс в коллекции
 * @param  {Array|Object} obj  коллекция, из которой нужно получить значение
 * @return {any}      значение obj[prop]
###
module.exports = _.curry (prop, obj) ->
  return obj[prop]
