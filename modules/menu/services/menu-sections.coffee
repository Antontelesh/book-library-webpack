module.exports = [
  'MenuSection'
  (MenuSection) ->
    class MenuSections

      section_names:
        '/books': 'Книги'
        '/authors': 'Авторы'
        '/genres': 'Жанры'
        # '/tags': 'Метки'

      constructor: ->

        @sections = _.map @section_names, (name, path) -> new MenuSection(name, path)

]
