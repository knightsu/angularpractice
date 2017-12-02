
angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$location','$scope', function($location, $scope) {
  $scope.flag = true;

    $scope.signup = function () {

        if($scope.flag)
            $scope.flag=false;

    };

    $scope.signin = function () {
        if(!$scope.flag)
            $scope.flag=true;
    }

}]);



