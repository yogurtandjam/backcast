var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(video => {
      this.$el.children().append(new VideoListEntryView({ model: video }).render());
    });


    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
