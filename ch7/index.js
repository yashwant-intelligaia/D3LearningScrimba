var data = [
        {"platform":"Android", percentage:60},
        {"platform":"iOS", percentage:30},
        {"platform":"blackBerry", percentage:10}
];

var svgWidth = 500, svgHeight = 300, radius = Math.min(svgWidth,svgHeight)/2;

var svg = d3.select("svg")
                .attr("width",svgWidth)
                .attr("height",svgHeight);

var g = svg.append("g")
        .attr("transform", "translate("+radius+","+radius+")");

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie().value(function(d){return d.percentage});

var path = d3.arc()
                .outerRadius(radius)
                .innerRadius(0);

var arc = g.selectAll("arc")
                .data(pie(data));                