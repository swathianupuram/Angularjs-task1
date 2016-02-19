'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
    .module('demoApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])

.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .otherwise({
            redirectTo: '/'
        });
});
/*$(document).ready(function() {
$('#menu-toggle').click(function() {
    $('#sidebar-wrapper').fadeToggle('slow');
    $('#page-content-wrapper').toggleClass("toggle");

});
});*/

var app = angular.module('demoApp');

app.controller('MainController', ['$scope',
    function MainController($scope) {
        $scope.animate = true;
        $scope.autoScroll = true;
        $scope.play = function() {
            $scope.animate = !$scope.animate;
            $scope.autoScroll = !$scope.autoScroll;
        }
    }
]);
