'use strict';

angular.module('myApp.test', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
   $routeProvider.when('/test', {
      templateUrl: 'test/test.html',
      controller: 'testCtrl'
   });
}])

.controller('testCtrl', [function() {

}]);