angular.module('video-player')

.component('app', {
  controller: function(youTube) {

    this.getVideos = function(data) {
      this.videos = data;
      this.videoPlaying = data[0];
    };

    this.getVideos = this.getVideos.bind(this);  

    this.$onInit = function() {
      youTube.search('hawaii', this.getVideos);
    };

    this.selectVideo = function(video) {
      this.videoPlaying = video;
    };

    this.selectVideo = this.selectVideo.bind(this);  

  },

  templateUrl: 'src/templates/app.html',

});
