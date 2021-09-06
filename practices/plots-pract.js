function init() {
  data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }];
  Plotly.newPlot("plot", data);
};

d3.selectAll("#dropdownMenu").on("change", updatePlotly);

function updatePlotly() {
  var dropdownMenu = d3.select("#dropdownMenu");
  var dataset = dropdownMenu.property("value");
  console.log(dataset);

  var XData=[1, 2, 3, 4, 5];
  var yData=[];

  if (dataset==="dataset1"){
    yData=[1, 2, 4, 8, 16];
  };
  if (dataset==="dataset2"){
    yData=[3, 2, 4, 8, 20];
  };

  var trace={
    x: [XData],
    y: [yData],
  };

  Plotly.restyle("plot", trace);

};
init();

