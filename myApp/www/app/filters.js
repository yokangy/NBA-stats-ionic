angular.module('NBAStats.filters', [])

.filter('oneDecimal', function(){
  return function(input){
    return input.toFixed(2);
  }
})