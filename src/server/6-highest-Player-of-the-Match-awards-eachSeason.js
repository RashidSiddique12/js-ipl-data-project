// Find a player who has won the highest number of Player of the Match awards for each season

const playerOfTheMatchAward = (matches)=>{

const playerOfMatch = matches.reduce((acc, match) => {
  const { season, player_of_match } = match;

  if (!acc[season]) {
    acc[season] = {};
  }
  if (!acc[season][player_of_match]) {
    acc[season][player_of_match] = 0;
  }
  acc[season][player_of_match]++;
  return acc;
}, {});

// console.log(playerOfMatch)


const highestPlayerOfMatchEachSeason = {};

for (let season in playerOfMatch) {
  highestPlayerOfMatchEachSeason[season] = Object.keys(
    playerOfMatch[season]
  ).reduce((acc, player) => {

    if (!acc.name || playerOfMatch[season][player] > acc.number) {
      acc.name = player;
      acc.number = playerOfMatch[season][player];
    }
    return acc;
  }, {});
}

// console.log(highestPlayerOfMatchEachSeason);
  return highestPlayerOfMatchEachSeason;
}
module.exports.playerOfTheMatchAward = playerOfTheMatchAward;


