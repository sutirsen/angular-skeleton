var app = angular.module('univinks',[
  'ui.router',
  'univinks.services',
  'univinks.home',
  'univinks.user'
]);

app.config([
  '$resourceProvider',
  '$httpProvider',
   function(
    $resourceProvider,
    $httpProvider
    ) {
 
  $resourceProvider.defaults.stripTrailingSlashes = true;

  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
  $httpProvider.defaults.transformRequest = function(obj) {
    var str = [];
    for(var p in obj)
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
  };
}]);

app.config(['$urlRouterProvider', '$stateProvider', 
  function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/404');
    $stateProvider.state({
      name: 'not_found',
      url: '/404',
      templateUrl: '404.html'
    });
}]);



