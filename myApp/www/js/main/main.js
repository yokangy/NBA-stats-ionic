angular.module('NBAStats.main', [])

.controller('MainController', ['$scope', function($scope){
  $scope.listItems = ['Name', 'Team', 'Position'];
}]);