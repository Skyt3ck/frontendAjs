var app = angular.module('userApp');
app.controller('userListController', function($scope, $http, $location, $routeParams, $sce, $window) {

    $scope.role = $window.localStorage.getItem("role");

    $scope.getUsers = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/user'
        }).then(function successCallback(response) {
            $scope.users = response.data.users;
        }, function errorCallback(response) {
            alert(response.data.mensaje);
        });
    }

    $scope.getUsers();

    $scope.goToCreate = function() {
        $location.path("/usercreate");
    }


});