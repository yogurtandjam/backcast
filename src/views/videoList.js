var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(video => {
      this.$el.children().append(new VideoListEntryView({ model: video }).render())
    })

    var firstId = this.$el.children().first().find('.video-id').text()
    var firstTitle = this.$el.children().first().find('.video-list-entry-title').text()
    var firstDescription = this.$el.children().first().find('.video-list-entry-detail').text()
    new VideoPlayerView({ el: '.player' }).render(firstId, firstTitle, firstDescription)
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
