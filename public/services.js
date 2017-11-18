var servicesMod = angular.module('univinks.services', [
    'ngResource',
    'ngCookies'
  ]);

servicesMod.factory('DemoService', ['$http', function($http){
  return {
    ping: function(){
      return $http({
        method: 'GET',
        url: 'http://0.0.0.0:3000/users',
        data: {'a':'b'}
      });
    }
  };
}]);