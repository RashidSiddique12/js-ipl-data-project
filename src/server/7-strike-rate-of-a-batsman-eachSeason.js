// Find the strike rate of a batsman for each season
// 7-strike-rate-of-a-batsman-eachSeason

const fs = require('fs');
const matches = require("../data/matches.json");
const deliveries = require("../data/deliveries.json");

const idmapWithSeason = matches.reduce((acc, match) => {
  const { id, season } = match;
  acc[id] = season;
  return acc;
}, {});
// console.log(idmapWithSeason);

const batsmanX = "ER Dwivedi";

const batsmanData = deliveries.reduce((acc, deliverly) => {
  const { batsman, batsman_runs, match_id, wide_runs,noball_runs } = deliverly;
  if (!acc[batsmanX]) {
    acc[batsmanX] = {};
  }
  if (batsmanX === batsman) {
    const season = idmapWithSeason[match_id];

    if (acc[batsmanX][season] === undefined) {
      acc[batsmanX][season] = [0, 0]; //[runs,ball]
    }
 
    acc[batsmanX][season][0] += parseInt(batsman_runs);
    acc[batsmanX][season][1] += (wide_runs === '0' && noball_runs === '0' ? 1 : 0);
  }
  return acc;
}, {});

// console.log(batsmanData);


for(let key in batsmanData[batsmanX]){

    batsmanData[batsmanX][key] = ((batsmanData[batsmanX][key][0]/batsmanData[batsmanX][key][1])*100).toFixed(2);
}
console.log(batsmanData);

fs.writeFileSync('../public/output/strikeRateOfABatsmanEachSeason.json', JSON.stringify(batsmanData));



// const batmansstrikeE = deliveries.reduce((acc, deliverly)=>{
//     const {batsman,batsman_runs, match_id, noball_runs, wide_runs} = deliverly;
//     if(batsman && !acc[batsman]){
//         acc[batsman] = {idmapWithSeason[match_id] : 0};
//     }
//     // acc[batsman].year = idmapWithSeason[match_id]; // not a good ways {runs : 0, ballfaced : 0}
//     // acc[batsman].runs  += parseInt(batsman_runs);
//     // noball_runs === '0' && wide_runs ==='0' ? acc[batsman].ballfaced++ : acc[batsman].ballfaced;
//     return acc;

// }, {})

// console.log(batmansstrikeE);
