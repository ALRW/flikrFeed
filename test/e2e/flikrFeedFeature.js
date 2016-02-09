describe('Flikr Feed', function(){
  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('loads the flikrFeed page', function(){
    expect(browser.getTitle()).toEqual("Flikr Feed");
  });

  it('outputs the Flikr API', function(){
    var feedItems = element.all(by.repeater('profile in feedCtrl.profiles'));
    expect(feedItems.count()).toEqual(20);
  });
});
