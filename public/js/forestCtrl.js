var app = angular.module("poems");

app.controller("forestCtrl", function($scope,myService, $location){

  $scope.obj = {};

  $scope.submitPoem = function(){

  myService.getWords($scope.obj);

  console.log($scope.obj);

  $location.path('/display-forest');

};

$scope.obj3 = myService.giveWords();

})
