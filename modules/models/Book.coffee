module.exports = class Book

  default_book =
    title: ''
    author: ''
    genre: ''
    description: ''
    isbn: []
    tags: []

  constructor: (params) ->
    _.assign(this, default_book, params)
