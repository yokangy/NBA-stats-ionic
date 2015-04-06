angular.module('NBAStats.positions', [])

.controller('PositionController', ['$scope', function($scope){
  $scope.positions = [
    {id: 'C', text: 'Center'},
    {id: 'PF', text: 'Power Forward'},
    {id: 'SF', text: 'Small Forward'},
    {id: 'SG', text: 'Shooting Guard'},
    {id: 'PG', text: 'Point Guard'}, 
  ]
}])