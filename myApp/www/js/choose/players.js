angular.module('NBAStats.players', [])

.controller('PlayerController', ['$scope', 'PlayerInfo', function($scope, PlayerInfo){
  $scope.players = [];

  PlayerInfo.getPlayers()
    .then(function(players){
      console.log(players)
      $scope.players = players;
    })
    .catch(function(err){
      console.log(err);
    })
}]);