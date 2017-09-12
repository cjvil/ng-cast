angular.module('video-player')
.component('videoList', {
  templateUrl: 'src/templates/videoList.html',

  bindings: {
    videos: '<',
    selectVideo: '<',
  },

  controller: function() {
    // this.videos = exampleVideoData;
    // console.log(exampleVideoData);
  }
});
