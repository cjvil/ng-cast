angular.module('video-player')

.component('search', {

  bindings: {
    getVideos: '<',
    result: '<'
  },

  templateUrl: 'src/templates/search.html'

});
