var dataSet = [80,100,56,120,140,98,180];
var svgHeight = 300, svgWidth= 500, barPadding=5;
var barWidth = (svgWidth/dataSet.length);
var svg = d3.select('body').select('svg')
                .attr('width',svgWidth)
                .attr('height',svgHeight);

var barChart = svg.selectAll('rect')
                .data(dataSet)
                .enter()
                .append('rect')
                .style('background','black')
                .attr('y',function(d){return svgHeight-d})
                .attr('height',function(d){return d})
                .attr('width',function(d){return (barWidth-barPadding)})
                .attr('transform',function(d,i){
                        var translate = [barWidth*i, 0];
                        return "translate("+translate+")";
                });

var text = svg.selectAll("text")
                .data(dataSet)
                .enter()
                .append("text")
                .text(function(d,i){return d})                
                .attr("y",function(d,i){return (svgHeight -d -2)})
                .attr("x",function(d,i){return barWidth*i})
                .attr("fill","#000")
