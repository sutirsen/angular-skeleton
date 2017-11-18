var homeMod = angular.module('univinks.home', [
  'ui.router'
]);

homeMod.config(['$stateProvider', function($stateProvider){
  $stateProvider.state({
    name: 'home',
    url: '/home',
    templateUrl: '/home/home.html',
    controller: 'HomeCtrl'
  });
}]);


homeMod.controller('HomeCtrl',['$scope', function($scope){
  $scope.helloMsg = "Welcome to Univinks!";
}]);
