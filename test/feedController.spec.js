describe('FeedController', function() {
  var $scope, ctrl, $resource;
  var httpBackend;
  var profiles = {
		"title": "Uploads from everyone",
		"link": "https://www.flickr.com/photos/",
		"description": "",
		"modified": "2016-01-31T13:54:26Z",
		"generator": "https://www.flickr.com/",
		"items": [
	   {
			"title": " ",
			"link": "https://www.flickr.com/photos/zxc723kk/24101042124/",
			"media": {"m":"https://farm2.staticflickr.com/1443/24101042124_c854871514_m.jpg"},
			"date_taken": "2016-01-30T02:48:18-08:00",
			"description": " <p><a href=\"https://www.flickr.com/people/zxc723kk/\">雯雯雯╰(*´︶`*)╯♡<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/zxc723kk/24101042124/\" title=\" \"><img src=\"https://farm2.staticflickr.com/1443/24101042124_c854871514_m.jpg\" width=\"180\" height=\"240\" alt=\" \" /><\/a><\/p> ",
			"published": "2016-01-31T13:54:26Z",
			"author": "nobody@flickr.com (雯雯雯╰(*´︶`*)╯♡)",
			"author_id": "122360864@N07",
			"tags": ""
	   },
	   {
			"title": "DSC_9327",
			"link": "https://www.flickr.com/photos/jeffmindel/24101042204/",
			"media": {"m":"https://farm2.staticflickr.com/1553/24101042204_60f7e20965_m.jpg"},
			"date_taken": "2015-12-01T20:32:39-08:00",
			"description": " <p><a href=\"https://www.flickr.com/people/jeffmindel/\">Jeff Mindel<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/jeffmindel/24101042204/\" title=\"DSC_9327\"><img src=\"https://farm2.staticflickr.com/1553/24101042204_60f7e20965_m.jpg\" width=\"160\" height=\"240\" alt=\"DSC_9327\" /><\/a><\/p> ",
			"published": "2016-01-31T13:54:26Z",
			"author": "nobody@flickr.com (Jeff Mindel)",
			"author_id": "10086078@N04",
			"tags": ""
    }]};
  beforeEach(module('FlikrFeedDisplay'));

  beforeEach(inject(function($controller) {
    ctrl = $controller('FeedController');
    
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .whenJSONP("https://api.flickr.com/services/feeds/photos_public.gne?format=json")
      .respond({items:"hello"});
  }));

  it('initializes with and empty profiles array', function(){
    expect(ctrl.profiles).toEqual([]);
  });

  it('returns the JSON data when called', function() {
    console.log(ctrl);
    ctrl.getResource();
    httpBackend.flush();
    expect(ctrl.profiles).toEqual(profiles);
  });

});
