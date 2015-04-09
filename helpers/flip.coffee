###*
 * @ngdoc function
 * @name helpers.flip
 * @module helpers
 * @kind function
 *
 * @description
 * Меняет первые два аргумента местами.
 *
 * <div class="alert">Остальные аргументы отсекаются</div>
 * <div class="alert alert-info">Оборачивает функцию в curry</div>
 *
 * @param  {Function} fn функция для смены порядка аргументов
 * @return {Function}    новая функция с обратным порядком аргументов
###
module.exports = (fn) ->
  return _.curry (first, second) ->
    fn.call(this, second, first)
