// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('NBAStats', [
  'ionic',
  'NBAStats.services',
  'NBAStats.filters',
  'NBAStats.main',
  'NBAStats.positions',
  'NBAStats.teams',
  'NBAStats.players',
  'NBAStats.playerAvg',
  'NBAStats.playerGameLogs'
  ])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/choose/main.html',
      controller: 'MainController'
    })
    .state('Positions', {
      url: '/positions',
      templateUrl: 'app/choose/positions.html',
      controller: 'PositionController'
    })
    .state('Teams', {
      url: '/teams',
      templateUrl: 'app/choose/teams.html',
      controller: 'TeamController'
    })
    .state('Players', {
      url: '/players',
      templateUrl: 'app/choose/players.html',
      controller: 'PlayerController'
    })
    .state('PlayerAvgs', {
      url: '/avgs',
      templateUrl: 'app/playerStats/playerAvg.html',
      controller: 'PlayerAvgController'
    })
    .state('PlayerGameLogs', {
      url: '/gameLogs',
      templateUrl: 'app/playerStats/playerGameLogs.html',
      controller: 'PlayerGameLogsController'
    })

  $urlRouterProvider.otherwise('/')
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
