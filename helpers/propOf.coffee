flip = require('./flip.coffee')
prop = require('./prop.coffee')

###*
 * @ngdoc function
 * @name helpers.propOf
 * @module  helpers
 *
 * @description
 * То же, что и {@link api/helpers.prop prop}, но с обратным порядком аргументов
 * @param {Array|Object} collection коллекция
 * @param {String|Number} prop ключ/индекс в коллекции
 * @return {Any} значение collection[prop]
###
module.exports = flip(prop)
