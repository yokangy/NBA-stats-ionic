angular.module('NBAStats.services', [])

.factory('ChooseInfo', ['$http', function($http){
  var getTeams = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/teams'
    })
    .then(function(res){
      return res.data;
    })
    .catch(function(err){
      console.log(err);
    })
  };

  var getPlayers = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/players'
    })
    .then(function(res){
      return res.data;
    })
    .catch(function(err){
      console.log(err);
    })
  }

  var filterValue = {};

  return {
    getTeams: getTeams,
    getPlayers: getPlayers,
    filterValue: filterValue
  };
}])

.factory('PlayerInfo', ['$http', function($http){
  var getAvgs = function(playerId){
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/players/avg/' + playerId
    })
    .then(function(res){
      return res.data;
    })
    .catch(function(err){
      console.log(err);
    })
  };

  var getGameLogs = function(playerId){
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/players/gamelogs/' + playerId
    })
    .then(function(res){
      return res.data;
    })
    .catch(function(err){
      console.log(err);
    })
  };

  var playerData = {};

  return {
    getAvgs: getAvgs,
    getGameLogs: getGameLogs,
    playerData: playerData
  };
}])