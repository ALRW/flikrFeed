app.controller('FeedController', ['Feed', function(Feed) {
  var self = this;
  self.profiles = [];

  self.getResource = function() {
    Feed.source()
    .then(function(data){
      console.log(data);
    });
  };

  jsonFlickrFeed = function(data) {
    self.profiles = data.items;
  };

  self.getResource();
}]);
