var app = angular.module("poems");

app.controller("cityCtrl", function($scope, myService, $location){

    // -- For city view
    $scope.obj = {};

    $scope.submitPoem = function(){

    myService.getWords($scope.obj);

    console.log($scope.obj);

    $location.path('/display-city');

    $scope.obj = {};

  };

    // -- For display-city view
    $scope.obj1 = myService.giveWords();

})
