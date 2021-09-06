console.log(cityGrowths);

var cityName=cityGrowths.map(city => city.City);
console.log(cityName);

var sortedCity=cityGrowths.sort((a,b)=> (a.Increase_from_2016-b.Increase_from_2016)).reverse();
console.log(sortedCity);

var topFive=sortedCity.slice(0,5);
console.log(topFive);


var Xs=cityGrowths.map(city=>city.City);
var Ys=cityGrowths.map(city=>parseInt(city.Increase_from_2016));

var trace={
    x: Xs,
    y: Ys,
    type: "bar"
    
}

var layout={
    title: "Cities Population",
    xaxis: {title: "Drinks Option"},
    yaxis: {title: "Number of Respondents"}
}

Plotly.newPlot("plotArea",[trace], layout);



