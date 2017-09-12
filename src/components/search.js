angular.module('video-player')

 

.component('search', {

  bindings: {
    getVideos: '<'
  },

  controller: function(youTube) {
    this.submitSearch = function(query) {
      youTube.search(query, this.getVideos);
    };
  },

  templateUrl: 'src/templates/search.html'

});
