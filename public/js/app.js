

var app = angular.module('poems', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider

    .when('/ocean',{
     controller: "oceanCtrl",
     templateUrl: "views/ocean.html"
    })
    .when('/moon', {
      controller: "moonCtrl",
      templateUrl: "views/moon.html"
    })
    .when('/forest', {
      controller: "forestCtrl",
      templateUrl: "views/forest.html"
    })
    .when('/city', {
      controller: "cityCtrl",
      templateUrl: "views/city.html"
    })
    .when('/jungle', {
      controller: "jungleCtrl",
      templateUrl: "views/jungle.html"
    })
    .when('/desert', {
      controller: "desertCtrl",
      templateUrl: "views/desert.html"
    })
    .when('/display-ocean', {
      controller: 'oceanCtrl',
      templateUrl: 'views/display-ocean.html'
    })
    .when('/display-city',{
      controller: 'cityCtrl',
      templateUrl: 'views/display-city.html'
    })
    .when('/display-desert',{
      controller: 'desertCtrl',
      templateUrl: 'views/display-desert.html'
    })
    .when('/display-forest',{
      controller: 'forestCtrl',
      templateUrl: 'views/display-forest.html'
    })
    .when('/display-jungle',{
      controller: 'jungleCtrl',
      templateUrl: 'views/display-jungle.html'
    })
    .when('/display-moon',{
      controller: 'moonCtrl',
      templateUrl: 'views/display-moon.html'
    })
    .otherwise({
      redirectTo: "/home"
    })
    
    });
