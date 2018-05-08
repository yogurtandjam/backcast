var VideoPlayerView = Backbone.View.extend({


  render: function(id, title, description) {
    var videoInfo = {
      id: id,
      title: title,
      description: description
    }
    this.$el.html(this.template(videoInfo));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
