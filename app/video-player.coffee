class Movie

  constructor: (@name, @src) ->

class MovieService

  constructor: ->
    @url = 'movies/database.json'

  getAll: ->
    dfd = $.Deferred()
    $.get(@url)
      .done(@getAll_done.bind this, dfd)
      .fail(console.log)
    dfd.promise()

  getAll_done: (dfd, data) ->
    movies = data.movies.map (movie) -> new Movie movie.name, movie.src
    dfd.resolve movies

class ViewModel

  constructor: ->
    @service = new MovieService
    @applicationTitle = ko.observable 'CoffeeScript Video Player'
    @videos = ko.observableArray()
    @selectedVideo = ko.observable()

  initialize: ->
    @service.getAll().done (movies) =>
      @videos movies
      @selectedVideo @videos()[0]

  isSelected: (video) -> video is @selectedVideo()

  select: (video) -> @selectedVideo video

$ ->
  vm = new ViewModel
  ko.applyBindings vm
  vm.initialize()
