angular.module('NBAStats.teams', [])

.controller('TeamController', ['$scope', 'ChooseInfo', function($scope, ChooseInfo){
  $scope.teams = [];
  ChooseInfo.filterValue = {};

  ChooseInfo.getTeams()
    .then(function(teams){
      $scope.teams = teams;
    })
    .catch(function(err){
      console.log(err);
    });

  $scope.onTap = function(id){
    ChooseInfo.filterValue.TeamId = id;
  };
}]);