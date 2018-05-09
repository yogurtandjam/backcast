var Videos = Backbone.Collection.extend({

  model: Video,
  search: function(input) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        'part': 'snippet',
        'q': input,
        'type': 'video',
        'videoEmbeddable': 'true',
        'key': window.YOUTUBE_API_KEY
      },
      // key: 'AIzaSyCii1LSuATN_6KeBAU9HiugnpcJWQWezuQ',
      success: function(data) {
        if (data.items.length < 5) {
          return;
        }
        window.videoData = data.items;
        var videos = new Videos(data.items);
        new VideoListView({ el: '.list', collection: videos }).render();
        new VideoPlayerView({ el: '.player' }).render(videos.models[0].attributes.id, videos.models[0].attributes.snippet.title, videos.models[0].attributes.snippet.description);
      }
    });
    console.log(input);
  },

});
