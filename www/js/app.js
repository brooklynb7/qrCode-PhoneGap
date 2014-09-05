'use strict';

// Declare app level module which depends on filters, and services
var aApp = angular.module('packageTracking', ['ngRoute','ngTouch', 'packageTrackingControllers']);

aApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'partials/home.html',
			controller: 'homeCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);