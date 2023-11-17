// Extra runs conceded per team in the year 2016

const extraRunsconcedecPerteam2016 = (matches, deliveries)=>{

const idOf2016Matches = matches.reduce((acc, match) => {
  const { id, season } = match;
  if (season === "2016") {
    acc.push(id);
  }
  return acc;
}, []);

// console.log(idOf2016Matches);

const extraRunsconcedecPerteam = deliveries.reduce((acc, delivery) => {
  const { match_id, bowling_team, extra_runs } = delivery;
  if (idOf2016Matches.includes(match_id)) {
    acc[bowling_team] = (acc[bowling_team] || 0) + parseInt(extra_runs);
  }
  return acc;
}, {});
// console.log(extraRunsconcedecPerteam);

  return extraRunsconcedecPerteam;
}

module.exports.extraRunsconcedecPerteam2016 = extraRunsconcedecPerteam2016;









///////////////////////////using for loop////////////////////////

// const perTeam = {};

// for (let j = 0; j < deliveries.length; j++) {
//   for (let i = 0; i < idOf2016Matches.length; i++) {
//     if (idOf2016Matches[i] === deliveries[j].match_id) {
//       if (!perTeam[deliveries[j].bowling_team]) {
//         perTeam[deliveries[j].bowling_team] = 0;
//       }
//       perTeam[deliveries[j].bowling_team] += parseInt(deliveries[j].extra_runs);

//       continue;
//     }
//   }
// }

// console.log(perTeam);

// fs.writeFileSync(
//   "../public/output/extraRunsConcededPerTeam2016.json",
//   JSON.stringify(extraRunsconcedecPerteam)
// );
