var app = angular.module("poems");

app.controller("moonCtrl",
function($scope, myService, $location){

  $scope.obj = {};

  $scope.submitPoem = function(){

  myService.getWords($scope.obj);

  console.log($scope.obj);

  $location.path('/display-moon');

};

$scope.obj5 = myService.giveWords();

})
