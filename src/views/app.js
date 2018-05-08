var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(this.collection);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({ el: '.list', collection: this.videos }).render();
    var firstId = $('.video-list').children().first().find('.video-id').text()
    var firstTitle = $('.video-list').children().first().find('.video-list-entry-title').text()
    var firstDescription = $('.video-list').children().first().find('.video-list-entry-detail').text()
    new VideoPlayerView({ el: '.player' }).render(firstId, firstTitle, firstDescription)
    new SearchView({ el: '.search' }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
