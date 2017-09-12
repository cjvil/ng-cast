angular.module('video-player')

.component('app', {
  controller: function($scope, youTube) {
    this.videos = exampleVideoData;
    this.videoPlaying = exampleVideoData[0];

    this.selectVideo = function(video) {
      this.videoPlaying = video;
    };

    this.selectVideo = this.selectVideo.bind(this);

    youTube.search();

    this.searchResults = function() {
      
    };

  },

  templateUrl: 'src/templates/app.html',

});
