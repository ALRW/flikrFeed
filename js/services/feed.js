app.factory('Feed', ['$http', function($http){
  var queryUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
  return {
    source: function(){
      return $http.jsonp(queryUrl, [nojsoncallback=1]);
    }
  };
}]);
