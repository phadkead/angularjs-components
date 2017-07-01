
//1. create module
(function (angular) {
	'use strict';
	angular.module('app', ['ngComponentRouter', 'tournaments','results'])
		//2. declare that my locationProvider will be HTML5. so it will create # based values
		.config(function ($locationProvider) {
			$locationProvider.html5Mode(true);
		})
		//3. define main router of our application. here it is app
		.value('$routerRootComponent', 'app')
		//4. add all components
		.component('app', {
			templateUrl: '/app/views/tabs.html',
			$routeConfig: [
				// ... means they will have child components
				{ path: '/Tournaments/...', name: 'Tournaments', component: 'tournaments' },
				{ path: '/Results/...', name: 'Results', component: 'results' }
			]
		});
})(window.angular);