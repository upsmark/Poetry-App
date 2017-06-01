var app = angular.module("poems");

app.controller("oceanCtrl", function($scope, myService, $location){

  // -- For ocean view
  $scope.obj = {};

  $scope.submitPoem = function(){

      myService.getWords($scope.obj);

      console.log($scope.obj);

      $location.path('/display-ocean');

  };

  // -- For display-ocean view
  $scope.obj6 = myService.giveWords();

})
