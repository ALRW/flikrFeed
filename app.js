(function() {
  var app = angular.module('FlikrFeedDisplay', []);

  app.controller('FeedController', ['$http', function($http) {
    var self = this;
    self.profiles = [];

    self.getResource = function() {
      $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json').success(function(data) {});
      jsonFlickrFeed = function(data) {
        self.profiles = data.items;
        console.log(data);
      };
    };

    self.getResource();
  }]);
}());
