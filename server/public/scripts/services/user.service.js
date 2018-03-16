myApp.service('UserService', ['$http', '$location', function ($http, $location) {
  console.log('UserService Loaded');
  var self = this;
  self.userObject = {};
  self.newUrlObject = {};

  self.getuser = function () {
      console.log('UserService -- getuser');
      $http.get('/api/user').then(function (response) {
        if (response.data.username) {
          // user has a curret session on the server
          self.userObject.userName = response.data.username;
          console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
        } else {
          console.log('UserService -- getuser -- failure');
          // user has no session, bounce them back to the login page
          $location.path("/home");
        }
      }, function (response) {
        console.log('UserService -- getuser -- failure: ', response);
        $location.path("/home");
      });
    },

    self.logout = function () {
      console.log('UserService -- logout');
      $http.get('/api/user/logout').then(function (response) {
        console.log('UserService -- logout -- logged out');
        $location.path("/home");
      });
    };

  self.shortenUrl = function (url) {
    console.log('shorten it!');
    self.urlObj = {
      longUrl: url
    }
    console.log('here is the url you entered as an object:', self.urlObj);

    $http({
      method: 'POST',
      url: 'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyD9fvYe6EyIVzADLbTQkNBUIjLNBih_vEE',
      data: self.urlObj
    }).then(
      function (response) {
        console.log('response:', response);
        self.newUrlObject.shortUrl = response.data.id;
        self.newUrlObject.longUrl = response.data.longUrl;
        console.log('new obj:', self.urlObject);
        self.addToDb(self.newUrlObject)
      });
  };

  self.addToDb = function (url) {
      console.log('sending to server...', url);
      $http.post('/api/user/addUrl', url).then(function (response) {
        console.log('success');
        $location.path('/user');
      },
        function (response) {
          console.log('error');
          self.message = "Something went wrong. Please try again."
        });
    }

}]);