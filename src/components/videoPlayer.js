angular.module('video-player')

.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',

  bindings: {
    videoPlaying: '<'
  },

  controller: function() {
    debugger;
    // this.video = exampleVideoData[0];
    console.log(this.videoPlaying, 'this.video');
  }
});
