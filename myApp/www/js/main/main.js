angular.module('NBAStats.main', [])

.controller('MainController', ['$scope', 'ChooseInfo', function($scope, ChooseInfo){
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
  
  ChooseInfo.filterValue = {};
}]);