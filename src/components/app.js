angular.module('video-player')

.component('app', {
  controller: function(youTube) {

    this.$onInit = function() {
      youTube.search('hawaii', this.getVideos);
    };

    this.getVideos = function(data) {
      this.videos = data;
      this.videoPlaying = data[0];
    };

    this.getVideos = this.getVideos.bind(this);  

    this.result = function(query) {
      youTube.search(query, this.getVideos);
    };

    this.result = this.result.bind(this);  

    this.selectVideo = function(video) {
      this.videoPlaying = video;
    };

    this.selectVideo = this.selectVideo.bind(this);  

  },

  templateUrl: 'src/templates/app.html',

});
