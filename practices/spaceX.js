const url="https://api.spacexdata.com/v2/launchpads";
// d3.json(url).then(spaceXResults => console.log(spaceXResults.map(data=>data.location.name)));
d3.json(url).then(receivedData=>console.log(receivedData.map(data=>data.location.latitude)));


d3.json("samples.json.json").then(function(sampleData){
    console.log(sampleData);
    Wfreq = sampleData.metadata.map(person => person.wfreq).sort((a,b)=>b-a);
    filteredwfreq=Wfreq.filter(element => element !=null);
    console.log(filteredwfreq);
    });

    d3.json("samples.json").then(function(sampleData){
     firstperson = sampleData.metadata[0];
     Object.entries(firstperson).forEach(([key,value])=>{
         console.log( key + ">>" + value);});
     })