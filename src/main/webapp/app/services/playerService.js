
function PlayerService($http) {

    this.getPlayers = function () {
      console.log("initializing players");
      var playersPromise = $http.get("/players/");
      return playersPromise;
    };

    this.getPlayer = function (id) {
      var playerDetailPromise = $http.get("/players/" + id);
      return playerDetailPromise;
    };
    
    this.getTournaments = function() {
      var tournamentsListPromise = $http.get("/players/tournaments");
      return tournamentsListPromise;
    }

    this.getPlayersByTournament = function(tournament) {
      var playersListPromise = $http.get("/players/tournaments/"+ tournament) ;
      return playersListPromise;
    }

    this.upvotePlayer = function(player){
      return  $http({
        url: '/players/upvote/',
        method: "POST",
        data: player
      }) ;
    }
}