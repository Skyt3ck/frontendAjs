var app = angular.module('userApp');
app.controller('userCreationController', function($scope, $http, loginService, $location, $routeParams, $sce, $window) {

    $scope.name = "";
    $scope.mail = "";
    $scope.pwd = "";
    $scope.token = $window.localStorage.getItem("token");
    $scope.returnUserList = function() {
        $location.path("/users");
    }

    $scope.sendPostData = function() {

        var req = {
            method: 'POST',
            url: 'http://localhost:3000/user?token=' + $scope.token,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function(obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {
                name: $scope.name,
                email: $scope.email,
                password: $scope.pwd

            }
        }

        $http(req).then(function(response) {

            $location.path("/users");
        }, function(response) {

            if (response.status == 401) {
                $location.path("/");
            } else {
                alert(response.data.message.message);
            }

        });

    }

});