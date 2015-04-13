angular.module('NBAStats.playerAvg', [])

.controller('PlayerAvgController', ['$scope', 'PlayerInfo', function($scope, PlayerInfo){
  // $scope.playerAvgs = {"id":346,"PlayerId":353,"fullName":"Kyrie Irving","seasonAvgPoints":22,"seasonAvgThreePointsMade":2.1077,"seasonAvgRebounds":3.1846,"seasonAvgAssists":5.2615,"seasonAvgSteals":1.4615,"seasonAvgBlocks":0.2615,"seasonAvgTurnovers":2.3692,"seasonAvgFanDuelScore":34.7908,"seasonAvgDraftKingsScore":37.1885,"tenDayAvgPoints":24.1,"tenDayAvgThreePointsMade":2.1,"tenDayAvgRebounds":2.8,"tenDayAvgAssists":5.1,"tenDayAvgSteals":1.4,"tenDayAvgBlocks":0.1,"tenDayAvgTurnovers":2.5,"tenDayAvgFanDuelScore":35.61,"tenDayAvgDraftKingsScore":38.05,"tenDayStdDevPoints":12.802,"tenDayStdDevThreePointsMade":2.11896,"tenDayStdDevRebounds":1.4,"tenDayStdDevAssists":2.38537,"tenDayStdDevSteals":1.2,"tenDayStdDevBlocks":0.3,"tenDayStdDevTurnovers":1.36015,"tenDayStdDevFanDuelScore":53.67,"tenDayStdDevDraftKingsScore":38.05,"createdAt":"2015-02-23T08:21:34.000Z","updatedAt":"2015-03-20T14:41:24.000Z"}
  $scope.playerAvgs = {};
  $scope.playerId = PlayerInfo.playerData.id;
  $scope.playerName = PlayerInfo.playerData.fullName;

  PlayerInfo.getAvgs($scope.playerId)
  .then(function(avgStats){
    $scope.playerAvgs = avgStats;
  })
  .catch(function(err){
    console.log(err);
  })
}]);