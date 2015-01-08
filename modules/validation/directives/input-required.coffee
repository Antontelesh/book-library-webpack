module.exports = [
  ->
    require: 'ngModel'
    link: (scope, element, attrs, ngModel) ->
      ngModel.$validators.input_required = (modelValue, viewValue) ->
        return _.isBoolean(modelValue) || viewValue.length > 0
]
