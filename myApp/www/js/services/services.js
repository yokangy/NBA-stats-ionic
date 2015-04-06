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
  }
}]);