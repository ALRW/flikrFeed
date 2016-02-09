describe("feedController", function(){
  var mockFeed = jasmine.createSpyObj('Feed', ['source']);
  var $scope;

  beforeEach(module('FlikrFeedDisplay', function($provide){
    $provide.factory('Feed', function(){return mockFeed;});
  }));

  beforeEach(function(){
    inject(function($injector){
      $controller = $injector.get("$controller");
      $scope = $injector.get('$rootScope').$new();
    });
  });

  it("calls the feed service", function(){
    $ctrl = $controller('FeedController', {$scope:$scope}, mockFeed);
    console.log(ctrl);
  });
});
