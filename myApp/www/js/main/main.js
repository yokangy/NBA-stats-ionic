angular.module('NBAStats.main', [])

.controller('MainController', ['$scope', function($scope){
  $scope.listItems = [{
    pageState: 'Players', 
    pageDesc: 'Name'
  },
  {
    pageState: 'Teams',
    pageDesc: 'Team'
  },
  {
    pageState: 'Positions',
    pageDesc: 'Position'
  }];
}]);