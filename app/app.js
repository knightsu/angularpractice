'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.test',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  //  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo: '/view1'});
    //$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}])
    .controller('mainctrl', ['$location', function ($location) {
        var path = $location.path();
    }]);
