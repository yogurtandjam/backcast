var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    var videoId = this.model.attributes.id
    var videoTitle = this.model.attributes.snippet.title
    var videoDescription = this.model.attributes.snippet.description
    this.$el.on('click', function() {
      new VideoPlayerView({ el: '.player' }).render(videoId, videoTitle, videoDescription)
    })
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
