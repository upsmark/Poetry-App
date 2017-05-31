var app = angular.module('poems');

app.directive('redditDir', function(){

    return{
      restrict:'E',
      replace: false,
      templateUrl: 'views/poetry.html'
    }
});
