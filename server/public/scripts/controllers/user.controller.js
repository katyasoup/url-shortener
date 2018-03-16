myApp.controller('UserController', ['UserService', function(UserService) {
  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;

  self.shortenUrl = function(url) {
    console.log('url is', url);
    UserService.shortenUrl(url);
  }
}]);
