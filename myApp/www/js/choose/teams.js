angular.module('NBAStats.teams', [])

.controller('TeamController', ['$scope', 'PlayerInfo', function($scope, PlayerInfo){
  $scope.teams = [];
  PlayerInfo.getTeams()
    .then(function(teams){
      console.log(teams);
      $scope.teams = teams;
    })
    .catch(function(err){
      console.log(err);
    });
}]);