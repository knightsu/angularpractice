
angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$location','$scope', '$http', '$window', '$rootScope', function($location, $scope, $http, $window, $rootScope) {


    var authenticate = function (callback) {
        $http.get("http://localhost:8080/user").success(function (response) {
            if(response.name)
            {
                $rootScope.authenticated=true;
            }
            else
            {
                $rootScope.authenticated=false;
            }
            callback && callback();
        }).error(function () {
            $rootScope.authenticated=false;
            callback && callback();
        });
    }
  $scope.flag = true;

  $scope.regdata = {};

  $rootScope.authenticated = false;
    $scope.signup = function () {

        if($scope.flag)
            $scope.flag=false;

    };

    $scope.signin = function () {
        if(!$scope.flag)
            $scope.flag=true;
    }

    $scope.reset = function () {
        $location.path("/view2");
        console.log('path', $location);
    }

    $scope.logdata = {};

    $scope.submit = function () {
        if ($scope.flag) {
            //var idata = {'username': $scope.emailId, 'password': $scope.pw};
            console.log('data', $scope.logdata);
            $http.post("http://localhost:8080/login", $.param($scope.logdata), {headers : {
                "content-type" : "application/x-www-form-urlencoded"
            }}).then(function (response) {
                authenticate(function () {
                    if($rootScope.authenticated) {
                        console.log("response", response);
                        $location.path("/view2");
                    }
                    else {
                        $location.path("/test");
                    }

                })
            }, function () {
                $rootScope.authenticated=false;
                $location.path("#!/test");
            })
        }
        else {
            console.log("regdata", $scope.regdata);
            $http.post("http://localhost:8080/register", $scope.regdata).then(function (response) {

                console.log("response", response);

            });
        }

    }

}]);



