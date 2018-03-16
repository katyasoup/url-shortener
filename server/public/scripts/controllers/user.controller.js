myApp.controller('UserController', ['UserService', function(UserService) {
  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;

  self.urlObject = UserService.urlObject

  self.shortenUrl = function(url) {
    console.log('url is', url);
    UserService.shortenUrl(url);
  }

  }]);