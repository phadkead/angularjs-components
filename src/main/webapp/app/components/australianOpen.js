
(function(angular) {
  'use strict';
  angular.module('australianOpen', [])
	.service('playerService',PlayerService)
	.component( 'australianOpen', {
			template: '<h2> Australian Open <h2><ng-outlet> </ng-outlet>',
			$routeConfig: [
			//if no other Route Definition matches the URL, then this Route Definition should be used by default
				{path: '/',    name: 'PlayersList',   component: 'playersList', useAsDefault: true},
				//match id as part of its path property
    			{path: '/:id', name: 'PlayersDetail', component: 'playerDetail'}
			]
		})
	.component('playersList', {
  		template:
    		' <div ng-repeat="player in $ctrl.players">\n' +
      		'<a ng-link="[\'PlayersDetail\', {id: player.id}]">{{player.name}}</a>\n' +
    		'</div>',        
      bindings: { $router: '<' },
  		controller: PlayerListComponent
	})

  .component('playerDetail', {
    template:
      '<div ng-if="$ctrl.player">\n' +
      '  <h3>"{{$ctrl.player.name}}"</h3>\n' +
      '  <div>\n' +
      '    <label>Id: </label>{{$ctrl.player.id}}</div>\n' +
      '  <div>\n' +
      '    <label>Name: </label>\n' +
      '    <input ng-model="$ctrl.player.name" placeholder="name"/>\n' +
      '  </div>\n' +
      '  <button ng-click="$ctrl.gotoPlayers()">Back</button>\n' +
      '</div>\n',
    bindings: { $router: '<' },
    controller: PlayerDetailComponent
  });

  function PlayerService($http) {
  
  
  this.getPlayers = function() {
     console.log("initializing players");
     var playersPromise =  $http.get("http://localhost:8080/players/");
     return playersPromise;
  };

  this.getPlayer = function(id) {
     var playerDetailPromise =  $http.get("http://localhost:8080/players/" + id);
     return playerDetailPromise;    
  };
}


function PlayerListComponent(playerService) {
  var selectedId = null;
  var $ctrl = this;

  this.$routerOnActivate = function(next) {
    // Load up the players for this view
    console.log("routerOnActivate")
    playerService.getPlayers().then(function(response) {
      console.log("Getting players")
      $ctrl.players = response.data;
      //selectedId = next.params.id;
    }, function myError(response) {
        alert("error");
    });
  };

  this.isSelected = function(player) {
    return (player.id === selectedId);
  };
}

function PlayerDetailComponent(playerService) {
  var $ctrl = this;

  this.$routerOnActivate = function(next) {
    console.log("routerOnActivate")
    // Get the player identified by the route parameter
    var id = next.params.id;
    playerService.getPlayer(id).then(function(player) {
      
      $ctrl.player = player;
       console.log("getting player details" + $ctrl.player.name);
    });
  };

  this.gotoPlayeres = function() {
    console.log("gotoPlayeres")
    var playerId = this.player && this.player.id;
    this.$router.navigate(['PlayerList', {id: playerId}]);
  };
}
})(window.angular);