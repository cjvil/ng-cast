angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.videoPlaying = exampleVideoData[0];

    this.selectVideo = function(video) {
      this.videoPlaying = video;
    };

    this.selectVideo = this.selectVideo.bind(this);

    this.searchResults = function() {
      

    };
  },

  templateUrl: 'src/templates/app.html',

});
