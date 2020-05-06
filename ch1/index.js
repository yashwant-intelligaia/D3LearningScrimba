d3.select();
d3.selectAll();

d3.select('h1').style('color','red')
    .attr('class','heading')
    .text('Updated text');

let body = d3.select('body');
body.append('p').text('first paragraph');
body.append('p').text('second paragraph');
body.append('p').text('third paragraph');

d3.selectAll('p').style('color','blue');