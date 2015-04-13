angular.module('NBAStats.directives', ['NBAStats.services'])

.directive('barChart', ['D3Service', function(D3Service){
  return {
    restrict: 'E',
    scope: {},
    link: function(scope, element, attrs){
      D3Service.d3().then(function(d3){

      });
    }
  }
}])

.directive('ngSparkline', function(){
  return {
    restrict: 'A',
    template: '<div class="sparkline"></div>'
  }
})