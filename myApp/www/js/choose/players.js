angular.module('NBAStats.players', [])

.controller('PlayerController', ['$scope', 'ChooseInfo', 'PlayerInfo', function($scope, ChooseInfo, PlayerInfo){
  // $scope.players = [{"id":346,"firstName":"LeBron","lastName":"James","fullName":"LeBron James","primaryPosition":"SF","TeamId":17,"createdAt":"2015-02-16T07:31:10.000Z","updatedAt":"2015-02-16T07:31:10.000Z"}];
  $scope.players = [];
  $scope.filterValue = ChooseInfo.filterValue;
  PlayerInfo.playerData = {};
  console.log('run')

  ChooseInfo.getPlayers()
    .then(function(players){
      $scope.players = players;
    })
    .catch(function(err){
      console.log(err);
    })

  $scope.onTap = function(player){
    console.log(player)
    PlayerInfo.playerData.id = player.id;
    PlayerInfo.playerData.fullName = player.fullName;
  };
}]);