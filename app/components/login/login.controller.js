var app = angular.module('userApp');
app.controller('loginController', function($scope, $http, loginService, $location, $routeParams, $sce, $window) {

    $scope.login = function() {

        var req = {
            method: 'POST',
            url: 'http://localhost:3000/login',
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
                email: $scope.user,
                password: $scope.pwd

            }
        }

        $http(req).then(function(response) {
            $window.localStorage.setItem("token", response.data.token);
            $window.localStorage.setItem("role", response.data.user.role);
            $location.path("/users");
        }, function(response) {

            alert(response.data.mensaje);

        });


    }

});