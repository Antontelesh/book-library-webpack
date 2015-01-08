module.exports = [
  '$scope', 'MenuSections'
  ($scope, MenuSections) ->

    menu_sections = new MenuSections()

    @sections = menu_sections.sections
]
