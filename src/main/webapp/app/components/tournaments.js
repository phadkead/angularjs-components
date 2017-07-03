
(function (angular) {
  'use strict';
  angular.module('tournaments', [])
    .service('playerService', PlayerService)
    .component('tournaments', {
      templateUrl: '/app/views/tournaments.html',
      $routeConfig: [
        //if no other Route Definition matches the URL, then this Route Definition should be used by default
        { path: '/', name: 'TournamentsList', component: 'tournamentsList', useAsDefault: true },

        { path: '/type/:type', name: 'PlayersList', component: 'playersList' },
        //match id as part of its path property
        { path: '/:id', name: 'PlayersDetail', component: 'playerDetail' }
      ],
      controller: TournamentsController

    })

    .component('tournamentsList', {
      templateUrl: '/app/views/tournamentsList.html',
      bindings: { $router: '<' },
      controller: TournamentsListComponent
    })
    .component('playersList', {
      templateUrl: '/app/views/playerList.html',
      bindings: { $router: '<' },
      controller: PlayerListComponent
    })

    .component('playerDetail', {
      templateUrl:
      '/app/views/playerDetail.html',
      bindings: { $router: '<' },
      controller: PlayerDetailComponent
    });


  function PlayerListComponent(playerService) {
    var selectedId = null;
    var $ctrl = this;

    this.$routerOnActivate = function (next) {
      var type = next.params.type;
      playerService.getPlayersByTournament(type).then(function (response) {
        $ctrl.players = response.data;
      }, function myError(response) {
        alert("error");
      });
    };
    this.isSelected = function (player) {
      return (player.id === selectedId);
    };
  }

  function PlayerDetailComponent(playerService) {

    var $ctrl = this;

    this.$routerOnActivate = function (next) {
      // Get the player identified by the route parameter
      var id = next.params.id;
      playerService.getPlayer(id).then(function (response) {
        $ctrl.player = response.data;
        console.log("getting player details" + $ctrl.player.name);
      });
    };

    this.gotoPlayers = function () {
      console.log("gotoPlayers")
      var playerId = this.player && this.player.id;
      this.$router.navigate(['PlayersList', { id: playerId }]);
    };
  }

  function TournamentsListComponent(playerService) {
    var $ctrl = this;

    this.$routerOnActivate = function () {
      playerService.getTournaments().then(function (response) {
        $ctrl.tournaments = response.data;
      }, function myError(response) {
        alert("error");
      });
    };
  }

})(window.angular);