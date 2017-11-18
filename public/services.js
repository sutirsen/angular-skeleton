var servicesMod = angular.module('univinks.services', [
    'ngResource',
    'ngCookies'
  ]);

var baseURL = 'http://0.0.0.0:3000';
servicesMod.factory('UserService', ['$http', function($http){
  return {
    signup: function(userObj){
      return $http({
        method: 'POST',
        url: `${baseURL}/signup`,
        data: userObj
      });
    }
  };
}]);