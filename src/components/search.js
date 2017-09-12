angular.module('video-player')

.component('search', {

  bindings: {
    getVideos: '<',
  },

  controller: function(youTube) {
    this.result = function(query) {
      youTube.search(query, this.getVideos);
    };
  },

  templateUrl: 'src/templates/search.html'

});
