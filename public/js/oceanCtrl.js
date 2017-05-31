var app = angular.module("poems");

app.controller("oceanCtrl", function($scope, myService, $location){

$scope.obj = {};

$scope.submitPoem = function(){

myService.getWords($scope.obj);

console.log($scope.obj);

$location.path('/display-ocean');

};

 $scope.obj6 = myService.giveWords();

})
