angular.module('video-player')
.service('youTube', function($scope, $http) {
  // TODO
  this.search = function (searchQuery) {

    $http({
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet,id&q=${searchQuery}&maxResults=5`

    }).then(function successCallback(response) {
      console.log('success');
    // this callback will be called asynchronously
    // when the response is available
    }, function errorCallback(response) {
      console.log('failure');
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    });

  };

});

