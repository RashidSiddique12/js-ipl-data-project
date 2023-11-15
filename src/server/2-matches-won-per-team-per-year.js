// // // Number of matches won per team per year in IPL.

const matches = require('../data/matches.json');
const fs = require('fs');

let teams = {};
for(let i=0; i<matches.length; i++){
    if(matches[i].winner && !teams[matches[i].winner]){
        teams[matches[i].winner] = {};
    }
}
// console.log(teams);

for(let team in teams){
    for(let i=0; i<matches.length; i++){
        if(team === matches[i].winner){
            if(!teams[team][matches[i].season]){
                teams[team][matches[i].season] = 0;
            }
            teams[team][matches[i].season]++;
        }
    }
}

fs.writeFileSync('../public/output/matchesWonPerTeamPerYear.json', JSON.stringify(teams))

// console.log(teams);

//////////////////2nd method using reduce method

// const matches = require("../data/matches.json");
// const fs = require("fs");

// const teams = matches.reduce((acc, match) => {
//   const { winner, season } = match;

//   acc[winner] = acc[winner] || {};
//   acc[winner][season] = (acc[winner][season] || 0) + 1;

//   return acc;
// }, {});

// fs.writeFileSync(
//   "../public/output/matchesWonPerTeamPerYear.json",
//   JSON.stringify(teams)
// );
// console.log(teams);
