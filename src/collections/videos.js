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
        console.log('data.items', data.items)
        new AppView({ collection: data.items })
      }
    })
    console.log(input)
  },

});
