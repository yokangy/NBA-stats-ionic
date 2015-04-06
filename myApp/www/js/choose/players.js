angular.module('NBAStats.players', [])

.controller('PlayerController', ['$scope', 'ChooseInfo', function($scope, ChooseInfo){
  $scope.players = [];
  $scope.filterValue = ChooseInfo.filterValue;

  ChooseInfo.getPlayers()
    .then(function(players){
      console.log(players)
      $scope.players = players;
    })
    .catch(function(err){
      console.log(err);
    })
}]);