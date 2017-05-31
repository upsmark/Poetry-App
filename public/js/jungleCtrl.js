var app = angular.module("poems");

app.controller("jungleCtrl", function($scope,myService, $location){

  $scope.obj = {};

  $scope.submitPoem = function(){

  myService.getWords($scope.obj);

  console.log($scope.obj);

  $location.path('/display-jungle');

};

$scope.obj4 = myService.giveWords();

})
