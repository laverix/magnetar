angular.module('mrmagnet', ['ngRoute']).config(function ($routeProvider) {
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
