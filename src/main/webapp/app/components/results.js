
(function (angular) {
	'use strict';
	angular.module('results', [])
		//.service('playerService',PlayerService)
		.component('results', {
			template: '<ng-outlet></ng-outlet>',
			$routeConfig: [
				//if no other Route Definition matches the URL, then this Route Definition should be used by default
				{ path: '/', name: 'ResultVotes', component: 'resultVotes', useAsDefault: true }
			]
		})
		.component('resultVotes', {
			templateUrl:
			'/app/views/results.html',
			bindings: { $router: '<' },
			controller: ResultVotesController
		})

	function ResultVotesController(playerService) {
		var $ctrl = this;
		$ctrl.$routerOnActivate = function (next) {
			var type = next.params.type;
			playerService.getPlayers().then(function (response) {
				$ctrl.players = response.data;
			}, function myError(response) {
				alert("error");
			});
		};
	}
})(window.angular);