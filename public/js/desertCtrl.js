var app = angular.module("poems");

app.controller("desertCtrl", function($scope,myService, $location){

  $scope.obj = {};

  $scope.submitPoem = function(){

    myService.getWords($scope.obj);

    console.log($scope.obj);

    $location.path('/display-desert');

  };

  $scope.obj2 = myService.giveWords();

})
