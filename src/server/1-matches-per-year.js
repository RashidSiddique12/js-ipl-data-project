// Number of matches played per year for all the years in IPL.
const matches = require("../data/matches.json");
const fs = require("fs");
// console.log(matches);

// let noOfMatcheePerYear = {};

// for (let i = 0; i < matches.length; i++) {
//   //   console.log(matches[i].season);
//   if (!noOfMatcheePerYear[matches[i].season]) {
//     noOfMatcheePerYear[matches[i].season] = 0;
//   }
//   noOfMatcheePerYear[matches[i].season]++;
// }
// console.log(JSON.stringify(noOfMatcheePerYear));

///////////////////////// using reduce

const noOfMatcheePerYear = matches.reduce((acc, match) => {
  const { season } = match;

  acc[season] = (acc[season] || 0) + 1;
  return acc;

}, {});

fs.writeFileSync(
  "../public/output/matchesPerYear.json",
  JSON.stringify(noOfMatcheePerYear)
);
console.log(noOfMatcheePerYear);
