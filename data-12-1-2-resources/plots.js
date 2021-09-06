//Bar chart 

// var trace = [{
//     x:["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", 
//     "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// }];

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Drinks Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", trace, layout);


//Pir chart
// var trace = [{
//     labels:["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", 
//     "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
// }];

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Drinks Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", trace, layout);


//scatter plot

var trace = [{
    x:["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", 
    "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'markers',   //this takes out line
    marker: { size: 12,
    color: "red"},
    type: "scatter"
}];

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Drinks Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", trace, layout);



let numbers=[1,2,3,4]
let square=numbers.map(num=>num*num);
console.log(square);

let double=numbers.map(function(num){
    return num*2;
})

console.log(double);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityName =  cities.map(city=>city.City);
console.log(cityName);

var cityState = cities.map(function(city){
    return city.State;
})

console.log(cityState);

var highRank=cities.filter(city=>city.Rank<=2);   //how to only get city name in this function?
console.log(highRank);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander','dolphin'];
//Filter the results to include only animals whose species name starts with the letter "s."

var sAnimal=words.filter(word=>word.includes("s"));
console.log(sAnimal);

var dAnimal=words.filter(word=>word.startsWith("d"));
console.log(dAnimal);

var familyAge = [3,2,39,37,9];

var sortedAge=familyAge.sort((a,b)=>a-b);
console.log(sortedAge);

var sortedAgereverse=familyAge.sort((a,b)=>a-b).reverse();  
console.log(sortedAgereverse);

//Or reverse in this way:
var sortedAgereverse2=familyAge.sort((a,b)=>b-a);  
console.log(sortedAgereverse2);

//slice to get first3 
 var slicedarr= familyAge.slice(0,3);
 console.log(slicedarr);
