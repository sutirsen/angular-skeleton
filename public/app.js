var app = angular.module('univinks',['univinks.services']);

app.controller('HomeCtrl',['$scope', 'DemoService',function($scope, DemoService){
  $scope.helloMsg = "Hello from Angular!";
  $scope.callServ = function() {
    DemoService.ping().then(function(response){
      console.log(response);
    }, function(err) {
      console.log(err);
    });
  }
}]);