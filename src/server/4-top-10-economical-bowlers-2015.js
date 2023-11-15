// Top 10 economical bowlers in the year 2015
const matches = require("../data/matches.json");
const deliveries = require("../data/deliveries.json");
const fs = require('fs');

const idof2015Matches = matches.reduce((acc, match) => {
  const { id, season } = match;
  if (season === "2015") {
    acc.push(id);
  }
  return acc;
}, []);
// console.log(idof2015Matches);

let bowlerdata = deliveries.reduce((acc, delivery) => {
  if (idof2015Matches.includes(delivery.match_id)) {
    const { bowler, total_runs, over, wide_runs, noball_runs } = delivery;
    if (!acc[bowler]) {
      acc[bowler] = { runs: 0, balls: 0 };
    }

    acc[bowler].runs += parseInt(total_runs);
    acc[bowler].balls += wide_runs === "0" && noball_runs === "0" ? 1 : 0;
  }
  return acc;
}, {});



//economy
Object.keys(bowlerdata).forEach(bowler => {
  const {runs, balls} = bowlerdata[bowler];
  bowlerdata[bowler].economy = ((runs /balls) * 6).toFixed(2);
})
// console.log(bowlerdata);



const bowlersArray = Object.entries(bowlerdata).map(([bowler, data])=>({
  bowler :  bowler, 
  economy : data.economy
}))

// console.log(bowlersArray);

// sort
const sortedBYEco = bowlersArray.sort((a, b) => a.economy - b.economy);
// console.log(sortedBYEco);
 
const top10Bowlers = sortedBYEco.slice(0, 10);
console.log(top10Bowlers);

fs.writeFileSync('../public/output/top10EconomicalBowlers2015.json', JSON.stringify(top10Bowlers));

