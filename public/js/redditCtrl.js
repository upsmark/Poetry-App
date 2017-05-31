var app = angular.module("poems");

app.controller('redditCtrl', function($scope, $http){

   $scope.poetry = [];

   $http({
       method: 'GET',
       url: 'http://www.reddit.com/r/childrenspoetry.json'
     }).then(function yayPoetry(response){
        $scope.poetry = response.data.data.children;
        console.log($scope.poetry);

      }, function(error){
        console.log(error);
      });
});
