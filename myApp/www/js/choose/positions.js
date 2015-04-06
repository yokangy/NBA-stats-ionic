angular.module('NBAStats.positions', [])

.controller('PositionController', ['$scope', 'ChooseInfo', function($scope, ChooseInfo){
  $scope.positions = [
    {code: 'C', text: 'Center'},
    {code: 'PF', text: 'Power Forward'},
    {code: 'SF', text: 'Small Forward'},
    {code: 'SG', text: 'Shooting Guard'},
    {code: 'PG', text: 'Point Guard'}
  ];

  ChooseInfo.filterValue = {};

  $scope.onTap = function(x){
    console.log('Im here')
    console.log(x)
    ChooseInfo.filterValue.primaryPosition = x;
  };
}])