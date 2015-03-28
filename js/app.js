var myApp = angular.module("myApp", ['ui.router'])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		});

	$urlRouterProvider.otherwise('home');
}]);