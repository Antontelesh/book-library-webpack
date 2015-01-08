module.exports = (fn) ->
  return _.curry (first, second) ->
    fn.call(this, second, first)
