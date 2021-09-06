function init(){
    var selector=d3.select("#selDataset");
    d3.json("samples.json").then((data)=>{
        console.log(data);
        var sampleNames=data.names;
        sampleNames.forEach(sample => {
            selector.append("option").text(sample).property("value", sample);
            
        });
    });
}
init();

function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  optionChanged("940");

function buildMetadata(sample){
    d3.json("samples.json").then((data)=>{
    var metaData=data.metadata;
    var resultArray=metaData.filter(sampleObj=>sampleObj.id==sample);
    var result = resultArray[0];

    var PANEL=d3.select("#sample-metadata");

    // PANEL.html(" ");
    Object.entries(result).forEach(([key, value])=>{
        PANEL.append("h6").text(key.toUpperCase() + ":  " + value);
    });
    // PANEL.append("h6").text('Ethnicity'+ ":  " + result.ethnicity);
    // PANEL.append("h6").text('Gender'+ ":  " + result.gender);
    // PANEL.append("h6").text('Age'+ ":  " + result.age);
    // PANEL.append("h6").text('Location'+ ":  " + result.location);
    
 });
}

function buildCharts(sample){

    d3.json("samples.json").then((data) => {
        var samplesotu=data.samples;
        var resultotuarr=samplesotu.filter(otu=>otu.id==sample);
        var resultotu=resultotuarr[0];

        console.log(resultotu);



        // resultotu= resultotu.map(values=> values.sample_values.sort((a,b)=>(b.sample_values-a.sample_values)));
        // console.log(resultotu)
        var outIDs=resultotu.otu_ids;
        var otuLabels=resultotu.otu_labels;
        var otuValues=resultotu.sample_values;

        top10IDs=outIDs.slice(0,10);
        top10vals=otuValues.slice(0,10)

        console.log(top10IDs);

        // var reference_array = ["ryan", "corbin", "dan", "steven", "bob"];
        // var array = ["bob", "dan", "steven", "corbin"];
        // array.sort(function(a, b) {
        //   return reference_array.indexOf(a) - reference_array.indexOf(b);
        // });


        // sortedresult=otuValues.sort((a,b)=>(b-a));
        // sortedresult=otuValues.slice(0,10);
        // console.log(sortedresult);

        var yticks = top10IDs.map(id=> "OTU "+id);
        var barData = {
            y:yticks,
            // y: top10IDs.toString(),
            x: top10vals.reverse(),
            type: "bar",
            orientation: "h"
          };

          var barData = [barData];
          var barLayout = {
            title: "Top 10 Bacteria Cultures Found"
        };

          Plotly.newPlot("bar", barData, barLayout);

//bubble chart
        var bubbleData=[{
            x: outIDs,
            y: otuValues,
            text:otuLabels,
            mode: 'markers',
            marker: {
                size: otuValues,
                color: outIDs
            }
        }];

        var bubblelayout={
            title: "Bacteria Cultures per Sample"
        };

        Plotly.newPlot("bubble", bubbleData, bubblelayout);

//Guage Chart

    d3.json("samples.json").then(function(data){
    wfreqfilter=data.metadata.filter(meta=>meta.id==sample);
    // console.log(wfreqfilter[0]);
    wfreqfilter=wfreqfilter[0];
    Wfreq=wfreqfilter.wfreq;
    console.log(`frequency: ${Wfreq}`);

    var guagedata = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: Wfreq,
            mode: "gauge+number",
            gauge: {
                axis: { range: [0, 10] },
                steps: [
                  { range: [0, 2], color: "red" },
                  { range: [2, 4], color: "orange" },
                  { range: [4, 6], color: "yellow" },
                  { range: [6, 8], color: "lightgreen" },
                  { range: [8, 10], color: "grey" }
                ]},
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: 9
                  },
            title: { text: "Belly Button WashingFrequency"},
            type: "indicator",
            mode: "gauge+number"
        
        }];
      
      var guagelayout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
      Plotly.newPlot('gauge', guagedata, guagelayout);

    });
})}


// k