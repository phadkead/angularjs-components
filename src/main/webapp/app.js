
//1. create module
(function(angular) {
   'use strict';
	angular.module('app', ['ngMaterial','ngAria','ngComponentRouter','australianOpen'])
//2. declare that my locationProvider will be HTML5. so it will create # based values
	.config(function($locationProvider) {
	  $locationProvider.html5Mode(true);
	})
//3. define main router of our application. here it is app
	.value('$routerRootComponent', 'app')
//4. add all components
	.component('app', {  	
	  	template:
	    '<nav>\n' +
	    '  <a>Australian Open</a>\n' +
	    '  <a ng-link="[\'Australian Open\']">Australian Open</a>\n' +
			// '  <a ng-link="[\'Heroes\']">Heroes</a>\n' +
	    '</nav>\n' +
	    '<ng-outlet></ng-outlet>\n',
	  $routeConfig: [
	  // ... means they will have child components
	    {path: '/australianOpen/...', name: 'Australian Open', component: 'australianOpen'}
  	  ]
	})

})(window.angular);