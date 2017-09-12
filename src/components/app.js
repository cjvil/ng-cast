angular.module('video-player')

.component('app', {
  controller: function(youTube) {

    this.videos = null;
    this.videoPlaying = null;

    this.getVideos = function(data) {
      this.videos = data;
      this.videoPlaying = data[0];
    };

    this.getVideos = this.getVideos.bind(this);  

    this.$onInit = function() {
      youTube.search('cats', this.getVideos);
    };

    this.selectVideo = function(video) {
      this.videoPlaying = video;
    };

    this.selectVideo = this.selectVideo.bind(this);  


    // this.searchResults = function() {
    //   youTube.search(, this.getVideos);
    // };

  },

  templateUrl: 'src/templates/app.html',

});
