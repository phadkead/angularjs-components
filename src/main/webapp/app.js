
//1. create module
(function (angular) {
	'use strict';
	angular.module('app', ['ngMaterial','ngAria',, 'md.data.table','ngAnimate','ngComponentRouter', 'tournaments','results'])
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
		}).config(function($mdThemingProvider) {

	// // Extend the red theme with a different color and make the contrast color black instead of white.
	// // For example: raised button text will be black instead of white.
	// var neonRedMap = $mdThemingProvider.extendPalette('red', {
	// 	'500': '#ff0000',
	// 	'contrastDefaultColor': 'dark'
	// });

	// // Register the new color palette map with the name <code>neonRed</code>
	// $mdThemingProvider.definePalette('neonRed', neonRedMap);

	// // Use that theme for the primary intentions
	// $mdThemingProvider.theme('default')
	// 	.primaryPalette('neonRed');

	 $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('orange')
	.backgroundPalette('grey') ;
	
})
})(window.angular);