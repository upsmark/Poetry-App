var app = angular.module("poems");

app.controller("moonCtrl",
function($scope, myService, $location){

   // -- For moon view
   $scope.obj = {};

  $scope.submitPoem = function(){

  myService.getWords($scope.obj);

  console.log($scope.obj);

  $location.path('/display-moon');

};

// -- For display-moon view
$scope.obj5 = myService.giveWords();

})
