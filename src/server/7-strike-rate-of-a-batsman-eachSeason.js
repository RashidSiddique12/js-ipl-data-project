// Find the strike rate of a batsman for each season
const prompt = require("prompt-sync")();

const strikeRateOfABatsmanEachSeason = (matches, deliveries) => {
  const idmapWithSeason = matches.reduce((acc, match) => {
    const { id, season } = match;
    acc[id] = season;
    return acc;
  }, {});
  // console.log(idmapWithSeason);

  const batsmanX = prompt("Entre batsman name : ");
  // const batsmanX = "ER Dwivedi";

  const batsmanData = deliveries.reduce((acc, deliverly) => {
    const { batsman, batsman_runs, match_id, wide_runs, noball_runs } =
      deliverly;
    if (!acc[batsmanX]) {
      acc[batsmanX] = {};
    }
    if (batsmanX === batsman) {
      const season = idmapWithSeason[match_id];

      if (acc[batsmanX][season] === undefined) {
        acc[batsmanX][season] = [0, 0]; //[runs,ball]
      }

      acc[batsmanX][season][0] += parseInt(batsman_runs);
      acc[batsmanX][season][1] +=
        wide_runs === "0" && noball_runs === "0" ? 1 : 0;
    }
    return acc;
  }, {});

  // console.log(batsmanData);

  for (let key in batsmanData[batsmanX]) {
    batsmanData[batsmanX][key] = (
      (batsmanData[batsmanX][key][0] / batsmanData[batsmanX][key][1]) *
      100
    ).toFixed(2);
  }
  // console.log(batsmanData);

  return batsmanData;
};

module.exports.strikeRateOfABatsmanEachSeason = strikeRateOfABatsmanEachSeason;
