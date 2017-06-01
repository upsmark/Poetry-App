

var app = angular.module('poems', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider

    .when('/home',{
     controller: "redditCtrl",
     templateUrl: "views/home.html"
    })

    .when('/ocean',{
     controller: "oceanCtrl",
     templateUrl: "views/ocean.html"
    })
    .when('/moon', {
      controller: "moonCtrl",
      templateUrl: "views/moon.html"
    })

    .when('/city', {
      controller: "cityCtrl",
      templateUrl: "views/city.html"
    })

    .when('/display-ocean', {
      controller: 'oceanCtrl',
      templateUrl: 'views/display-ocean.html'
    })
    .when('/display-city',{
      controller: 'cityCtrl',
      templateUrl: 'views/display-city.html'
    })

    .when('/display-moon',{
      controller: 'moonCtrl',
      templateUrl: 'views/display-moon.html'
    })
    
    .otherwise({
      redirectTo: "/home"
    })

    });
