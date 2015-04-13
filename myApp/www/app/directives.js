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

.directive('ngSparkline', ['D3Service', function(D3Service){
  return {
    restrict: 'A',
    scope: {},
    transclude: true,
    replace: true,
    template: '<div class="sparkline"><div ng-transclude></div></div>',
    controller: 'PlayerGameLogsController',
    link: function(scope, element, attrs){
      D3Service.d3().then(function(d3){
        scope.$watch('gameLogs', function(newVal){
          if(newVal){
            var fanDuelScores = [];

            angular.forEach(scope.gameLogs, function(game){
              fanDuelScores.push(game.fanDuelGameScore);
            })

            chartGraph(element, fanDuelScores, attrs);
          }
        })
      })
    }
  }
}])

var chartGraph = function(element, data, opts) {
  var width = opts.width || 200,
      height = opts.height || 80,
      padding = opts.padding || 30;

  // chart
  if(d3.select('svg')){
    d3.select('svg').remove();
  }

  var svg     = d3.select(element[0])
                  .append('svg:svg')
                  .attr('width', width)
                  .attr('height', height)
                  .attr('class', 'sparkline')
                  .append('g')
                    .attr('transform', 'translate('+padding+', '+padding+')');

  var maxY    = d3.max(data),
      x       = d3.scale.linear()
                  .domain([0, data.length])
                  .range([0, width]),
      y       = d3.scale.linear()
                  .domain([0, maxY])
                  .range([height, 0]),
      yAxis = d3.svg.axis().scale(y)
                    .orient('left')
                    .ticks(5);

  svg.append('g')
      .attr('class', 'axis')
      .call(yAxis);

  var line    = d3.svg.line()
                  .interpolate('linear')
                  .x(function(d,i){return x(i);})
                  .y(function(d,i){return y(d);}),
      path    = svg.append('svg:path')
                    .data([data])
                    .attr('d', line)
                    .attr('fill', 'none')
                    .attr('stroke', 'black')
                    .attr('stroke-width', '1');
}