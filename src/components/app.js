angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.videoPlaying = exampleVideoData[0];

    this.selectVideo = function() {
      console.log('clicked');
    };
  },

  templateUrl: 'src/templates/app.html',

});
