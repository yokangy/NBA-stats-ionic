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

.factory('D3Service', ['$document', '$q', '$rootScope', function($document, $q, $rootScope){
  var d = $q.defer();
  function onScriptLoad(){
    $rootScope.$apply(function(){ d.resolve(window.d3);});
  }
  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = 'http://d3js.org/d3.v3.min.js';
  scriptTag.onreadystatechange = function(){
    if(this.readystate === 'complete') onScriptLoad();
  }
  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);

  return {
    d3: function(){ return d.promise; }
  }
}])