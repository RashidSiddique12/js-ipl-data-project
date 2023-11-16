// Find the number of times each team won the toss and also won the match

const matches = require("../data/matches.json");
const fs = require("fs");

const teamsWonTossAndMatch = matches.reduce((acc, match) => {
  const { toss_winner, winner } = match;
  if (toss_winner === winner) {
    if (!acc[toss_winner]) {
      acc[toss_winner] = 0;
    }
    acc[toss_winner]++;
  }
  return acc;
}, {});

fs.writeFileSync(
  "../public/output/teamWonTossAsWellAsMatch.json",
  JSON.stringify(teamsWonTossAndMatch)
);

// console.log(teamsWonTossAndMatch);
