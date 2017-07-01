

function PlayerService($http) {
    this.getPlayers = function() {
      var playersPromise =  $http.get("http://localhost:8080/players/");
      return playersPromise;
    };

    this.getPlayerById = function(id) {
      var playerDetailPromise =  $http.get("http://localhost:8080/players/" + id);
      return playerDetailPromise;    
    };

    this.getPlayersByTournament = function(tournament) {
      var playerDetailPromise =  $http.get("http://localhost:8080/players?tournament=" + tournament);
      return playerDetailPromise;    
    };
}