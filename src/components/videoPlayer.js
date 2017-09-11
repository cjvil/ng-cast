angular.module('video-player')

.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',

  // bindings: {
  //   video: '<'
  // },

  controller: function() {
    this.video = exampleVideoData[0];
    console.log(this.video, 'this.video');
  }
});
