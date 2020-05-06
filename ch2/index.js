var dataSet = [1,2,3,4,5];
d3.select('body')
        .selectAll('p')
        .data(dataSet)
        .enter()
        .append('p')
        .text(function(d){return 'Paragraph '+d});
