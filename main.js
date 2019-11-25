var dataset = [5, 17, 15, 13, 25, 30, 15, 17, 35, 10, 25, 15],
  w = 300,
  h = 300;

//create svg
var svg = d3
  .select('body')
  .append('svg')
  .attr('width', w)
  .attr('height', h);

//create shapes in svg with data
svg
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('class', 'circles')
  .attr('cx', function(d, i) {
    return 10 + i * 22;
  })
  .attr('cy', function(d) {
    return 200 - d * 5;
  })
  .attr('r', function(d) {
    return d / 2;
  })
  .transition()
  .style('fill', 'teal')
  .duration(1500)
  .delay(function(d, i) {
    return i * 100;
  });
