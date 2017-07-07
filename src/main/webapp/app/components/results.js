
(function(angular) {
  'use strict';
  angular.module('results', [])
	//.service('playerService',PlayerService)
	.component( 'results', {
			templateUrl: '/app/views/results.html',
			$routeConfig: [
			//if no other Route Definition matches the URL, then this Route Definition should be used by default
				{path: '/',    name: 'ResultVotes',   component: 'resultVotes', useAsDefault: true}
				//match id as part of its path property
    			//{path: '/:id', name: 'PlayersDetail', component: 'playerDetail'}
			]
    //controller : TournamentsController

		})
 	.component('resultVotes', {
  		template:
    		' <div>\n' +
      		'Display grid here' +
    		'</div>',        
      bindings: { $router: '<' },
  		controller: ResultVotesController
	})

function ResultVotesController(playerService) {
  var $ctrl = this;

  this.$routerOnActivate = function() {
    // console.log("routerOnActivate")
    // // Get the player identified by the route parameter
    // var id = next.params.id;
    // playerService.getPlayer(id).then(function(response) {
      
    //   $ctrl.player = response.data;
    //    console.log("getting player details" + $ctrl.player.name);
    // });
  };

  
}
})(window.angular);