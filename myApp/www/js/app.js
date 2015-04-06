// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('NBAStats', [
  'ionic',
  'NBAStats.services',
  'NBAStats.main',
  'NBAStats.positions',
  'NBAStats.teams',
  'NBAStats.players',
  'NBAStats.playerStats'
  ])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'js/main/main.html',
      controller: 'MainController'
    })
    .state('Positions', {
      url: '/positions',
      templateUrl: 'js/choose/positions.html',
      controller: 'PositionController'
    })
    .state('Teams', {
      url: '/teams',
      templateUrl: 'js/choose/teams.html',
      controller: 'TeamController'
    })
    .state('Players', {
      url: '/players',
      templateUrl: 'js/choose/players.html',
      controller: 'PlayerController'
    })
    .state('PlayerStats', {
      abstract: true,
      templateUrl: 'js/playerStats/playerStats.html',
      controller: 'PlayerStatsController'
    })
    .state('PlayerStats.avgs', {
      url: '/avgs',
      views: {
        avgs: {
          templateUrl: 'js/playerStats/playerAvg.html'
        }
      }
    })
    .state('PlayerStats.gameLogs', {
      url: '/gameLogs',
      views: {
        gameLogs: {
          templateUrl: 'js/playerStats/playerGameLogs.html'
        }
      }
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
