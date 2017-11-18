var userMod = angular.module('univinks.user', [
  'ui.router',
  'univinks.services'
]);

userMod.config(['$stateProvider', function($stateProvider){
  $stateProvider.state({
    name: 'signup',
    url: '/signup',
    templateUrl: '/user/signup.html',
    controller: 'SignupCtrl'
  });
  
  $stateProvider.state({
    name: 'login',
    url: '/login',
    templateUrl: '/user/login.html'
  });
}]);

userMod.controller('SignupCtrl', ['UserService', '$scope', function(UserService, $scope){
  $scope.msgEnable = false;
  $scope.msg = "";
  $scope.signup = function() {
    UserService.signup($scope.user).then(function(response){
      $scope.msgEnable = true;
      $scope.msg = "Registered Successfully!";

    }, function(err) {
      $scope.msg = err.data.message;
      $scope.msgEnable = true;
    });
  }
}]);