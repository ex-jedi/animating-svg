//hexbin
!(function() {
  d3.hexbin = function() {
    function u(n) {
      var r = {};
      return (
        n.forEach(function(n, t) {
          var a = s.call(u, n, t) / o,
            e = Math.round(a),
            c = h.call(u, n, t) / i - (1 & e ? 0.5 : 0),
            f = Math.round(c),
            l = a - e;
          if (3 * Math.abs(l) > 1) {
            var v = c - f,
              g = f + (f > c ? -1 : 1) / 2,
              m = e + (e > a ? -1 : 1),
              M = c - g,
              d = a - m;
            v * v + l * l > M * M + d * d &&
              ((f = g + (1 & e ? 1 : -1) / 2), (e = m));
          }
          var j = f + '-' + e,
            p = r[j];
          p
            ? p.push(n)
            : ((p = r[j] = [n]),
              (p.i = f),
              (p.j = e),
              (p.x = (f + (1 & e ? 0.5 : 0)) * i),
              (p.y = e * o));
        }),
        d3.values(r)
      );
    }
    function a(r) {
      var t = 0,
        u = 0;
      return n.map(function(n) {
        var a = Math.sin(n) * r,
          e = -Math.cos(n) * r,
          i = a - t,
          o = e - u;
        return (t = a), (u = e), [i, o];
      });
    }
    var e,
      i,
      o,
      c = 1,
      f = 1,
      h = r,
      s = t;
    return (
      (u.x = function(n) {
        return arguments.length ? ((h = n), u) : h;
      }),
      (u.y = function(n) {
        return arguments.length ? ((s = n), u) : s;
      }),
      (u.hexagon = function(n) {
        return arguments.length < 1 && (n = e), 'm' + a(n).join('l') + 'z';
      }),
      (u.centers = function() {
        for (var n = [], r = 0, t = !1, u = 0; f + e > r; r += o, t = !t, ++u)
          for (var a = t ? i / 2 : 0, h = 0; c + i / 2 > a; a += i, ++h) {
            var s = [a, r];
            (s.i = h), (s.j = u), n.push(s);
          }
        return n;
      }),
      (u.mesh = function() {
        var n = a(e)
          .slice(0, 4)
          .join('l');
        return u
          .centers()
          .map(function(r) {
            return 'M' + r + 'm' + n;
          })
          .join('');
      }),
      (u.size = function(n) {
        return arguments.length ? ((c = +n[0]), (f = +n[1]), u) : [c, f];
      }),
      (u.radius = function(n) {
        return arguments.length
          ? ((e = +n), (i = 2 * e * Math.sin(Math.PI / 3)), (o = 1.5 * e), u)
          : e;
      }),
      u.radius(1)
    );
  };
  var n = d3.range(0, 2 * Math.PI, Math.PI / 3),
    r = function(n) {
      return n[0];
    },
    t = function(n) {
      return n[1];
    };
})();

//map
var width = 960,
  height = 500,
  parseDate = d3.time.format('%x').parse;

var color = d3.time
  .scale()
  .domain([new Date(1962, 0, 1), new Date(2006, 0, 1)])
  .range(['magenta', 'teal'])
  .interpolate(d3.interpolateLab);

var hexbin = d3
  .hexbin()
  .size([width, height])
  .radius(8);

var radius = d3.scale
  .sqrt()
  .domain([0, 12])
  .range([0, 8]);

var projection = d3.geo
  .albers()
  .scale(1000)
  .translate([width / 2, height / 2])
  .precision(0.1);

var path = d3.geo.path().projection(projection);

var svg = d3
  .select('.contain')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

queue()
  .defer(
    d3.json,
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/blocks.json',
  )
  .defer(
    d3.tsv,
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/readme-walmart.tsv',
  )
  .await(ready);

function ready(error, us, walmarts) {
  if (error) throw error;

  walmarts.forEach(function(d) {
    var p = projection(d);
    (d[0] = p[0]), (d[1] = p[1]);
    d.date = parseDate(d.date);
  });

  svg
    .append('path')
    .datum(topojson.feature(us, us.objects.land))
    .attr('class', 'land')
    .attr('d', path);

  svg
    .append('path')
    .datum(
      topojson.mesh(us, us.objects.states, function(a, b) {
        return a !== b;
      }),
    )
    .attr('class', 'states')
    .attr('d', path);

  svg
    .append('g')
    .attr('class', 'hexagons')
    .selectAll('path')
    .data(
      hexbin(walmarts).sort(function(a, b) {
        return b.length - a.length;
      }),
    )
    .enter()
    .append('path')
    .attr('d', function(d) {
      return hexbin.hexagon(radius(d.length));
    })
    .attr('transform', function(d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    })
    .style('fill', function(d) {
      return color(
        d3.median(d, function(d) {
          return +d.date;
        }),
      );
    });
}
