angular.module('NBAStats.playerGameLogs', [])

.controller('PlayerGameLogsController', ['$scope', 'PlayerInfo', function($scope, PlayerInfo){
  $scope.gameLogs = [];
  $scope.playerId = PlayerInfo.playerData.id;
  $scope.playerName = PlayerInfo.playerData.fullName;

  PlayerInfo.getGameLogs($scope.playerId)
  .then(function(gameLogs){
    $scope.gameLogs = gameLogs;
  })
  .catch(function(err){
    console.log(err);
  })
}]);