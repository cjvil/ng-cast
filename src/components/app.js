angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.videoPlaying = exampleVideoData[0];
  },
  templateUrl: 'src/templates/app.html',
  
});
