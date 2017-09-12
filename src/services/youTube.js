angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  // this.inject($http);

  this.search = function (searchQuery, callback) {
    var params = {
      q: searchQuery,
      part: 'snippet',
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
      videoEmbeddable: 'true',
      type: 'video'
    };
  
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: params
      // url: `https://www.googleapis.com/youtube/v3/search?key=${window.YOUTUBE_API_KEY}&part=snippet,id&q=${searchQuery}&maxResults=5`
    }).then(function successCallback(response) {
      console.log('success');
      callback(response.data.items);
    // this callback will be called asynchronously
    // when the response is available
    }, function errorCallback(response) {
      console.log('failure');
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    });

  };

});

