// Find the bowler with the best economy in super overs
// 9-best-Economy-in-superOver.js

const deliveries = require("../data/deliveries.json");
const fs = require('fs');

const ballInSuperOver = deliveries.reduce((acc, delivery) => {
  const { is_super_over, bowler, total_runs, wide_runs, noball_runs } =
    delivery;
  if (is_super_over !== "0") {
    if (!acc[bowler]) {
      acc[bowler] = { runs: 0, balls: 0 };
    }
    acc[bowler].runs += parseInt(total_runs);
    acc[bowler].balls += wide_runs === "0" && noball_runs === "0" ? 1 : 0;
  }
  return acc;
}, {});

//eco
Object.keys(ballInSuperOver).forEach((bowler) => {
  const { runs, balls } = ballInSuperOver[bowler];
  ballInSuperOver[bowler].economy = ((runs / balls) * 6).toFixed(2);
});
// console.log(ballInSuperOver);

const ballInSuperOverArray = Object.entries(ballInSuperOver).map(
  ([bowler, data]) => ({
    bowler: bowler,
    economy: data.economy,
  })
);

ballInSuperOverArray.sort((a,b)=> a.economy - b.economy);

const bestEconomyInSuperOver = ballInSuperOverArray.slice(0,1);

// console.log(ballInSuperOverArray);
console.log(bestEconomyInSuperOver);

fs.writeFileSync('../public/output/bestEconomyInSuperOver.json', JSON.stringify(bestEconomyInSuperOver));




