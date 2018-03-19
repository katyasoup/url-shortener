myApp.controller('UserController', ['UserService', function (UserService) {
  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;

  self.urlObject = UserService.urlObject;
  self.displayUrls = UserService.displayUrls;

  self.shortenUrl = function (url, id) {
    console.log('url is', url);
    UserService.shortenUrl(url);
  }

  self.getUrls = function (id) {
    console.log('urls from id', id);
    UserService.getFromDb(id)
  }

  self.tallyClicks = function(id) {
    console.log('link you cicked has an id of', id);
    UserService.tallyClicks(id);
  }

}]);