/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

(async () => {
  const data = await d3.json('data/buildings.json')
  data.forEach(point => point.height = +point.height)

  const svg = d3.select('#chart-area')
    .append('svg')
    .attr('height', 500)
    .attr('width', 500)

  const bars = svg.selectAll('rect')
    .data(data)
    .enter()

  bars.append('rect')
    .attr('x', (data, index) => index * 40)
    .attr('y', 0)
    .attr('height', data => data.height)
    .attr('width', 20)
    .attr('fill', 'grey')
})();