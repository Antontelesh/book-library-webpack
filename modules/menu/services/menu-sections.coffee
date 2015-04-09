module.exports = [
  'MenuSection'
  (MenuSection) ->
    class MenuSections

      section_names:
        '/books': 'books'
        '/authors': 'authors'
        # '/genres': 'genres'
        # '/tags': 'tags'

      constructor: ->

        @sections = _.map @section_names, (name, path) -> new MenuSection(name, path)

]
