new Chartist.Line(
  '.ct-chart',
  {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [11, 12, 13, 11, 12, 10, 11, 10],
      [12, 11, 17, -1, 0, 18, -2, 8],
      [0, 8, 12, 1, 15, 3, 18, 1],
      [3, 2, 12, 15, 16, 3, 18, -3],
    ],
  },
  {
    high: 20,
    low: -3,
    fullWidth: true,
    // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
    axisY: {
      onlyInteger: true,
      offset: 20,
    },
  },
);

setTimeout(function() {
  var path = document.querySelector('.ct-series-a path');
  var length = path.getTotalLength();
  console.log(length);
}, 3000);
