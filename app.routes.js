var app = angular.module("userApp");
app.config(function($routeProvider) {
    $routeProvider
        .when("/users", {
            templateUrl: "app/components/userList/userList.html",
            controller: "userListController",
            controllerAs: "userListCtrl"
        })
        .when("/usercreate", {
            templateUrl: "app/components/userCreation/userCreation.html",
            controller: "userCreationController",
            controllerAs: "userCreationCtrl"
        })
        .when("/", {
            templateUrl: "app/components/login/login.html",
            controller: "loginController",
            controllerAs: "loginCtrl"
        })
        .otherwise("/")
});