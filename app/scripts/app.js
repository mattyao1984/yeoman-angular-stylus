'use strict';

/**
 * @ngdoc overview
 * @name yomanAngularStylusApp
 * @description
 * # yomanAngularStylusApp
 *
 * Main module of the application.
 */
angular
  .module('yomanAngularStylusApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
