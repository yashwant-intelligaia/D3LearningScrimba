// var dataSet = [1,2,3,4,5,4,3,2,1];
var dataSet = [80,100,56,120,140,98,180];
var svgHeight = 300, svgWidth= 500, barPadding=5;
var barWidth = (svgWidth/dataSet.length);
var svg = d3.select('body').select('svg')
                .attr('width',svgWidth)
                .attr('height',svgHeight);

var xScale = d3.scaleLinear()
                .domain([0,d3.max(dataSet)])                
                .range([0,svgHeight]);

var yScale = d3.scaleLinear()
                .domain([0, d3.max(dataSet)])                
                .range([svgHeight,0]);

var x_axis = d3.axisBottom()
                .scale(xScale);
                
var y_axis = d3.axisLeft()
                .scale(yScale);
                
svg.append("g")
        .attr("transform","translate(50,40)")
        .call(y_axis);

var xAxisTranslate = svgHeight -20;

svg.append("g")
        .attr("transform","translate(50,"+xAxisTranslate+")")
        .call(x_axis);

// var barChart = svg.selectAll('rect')
//                 .data(dataSet)
//                 .enter()
//                 .append('rect')
//                 .style('background','black')
//                 .attr('y',function(d){return svgHeight-yScale(d)})
//                 .attr('height',function(d){return yScale(d)})
//                 .attr('width',function(d){return (barWidth-barPadding)})
//                 .attr('transform',function(d,i){
//                         var translate = [barWidth*i, 0];
//                         return "translate("+translate+")";
//                 });                