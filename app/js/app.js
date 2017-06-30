angular.module('mrmagnet', ['ngRoute', 'angular-svg-round-progressbar']).config(function ($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'html/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
