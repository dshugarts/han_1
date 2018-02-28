// First param to module is the name, matches ng-app in HTML
// Second is dependency array
const app = angular.module('myApp', ['ngRoute']); // <- Pass in angular-route module

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/user.html',
    controller: 'UserController as cc'
  }).when('/score', {
    templateUrl: 'views/score.html',
    controller: 'ScoreController as mc'
  }).when('/user', {
    redirectTo: '/'
  }).otherwise({ template: '<h1>404 Page Not Found</h1>' });

});