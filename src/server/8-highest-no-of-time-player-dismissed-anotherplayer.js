//Find the highest number of times one player has been dismissed by another player

const OnedDismissedbyOther = (deliveries) => {
  const dismisalByBolwer = deliveries.reduce((acc, delivery) => {
    const { bowler, player_dismissed, dismissal_kind } = delivery;
    if (player_dismissed !== "" && dismissal_kind !== "run out") {
      if (!acc[bowler]) {
        acc[bowler] = {};
      }
      if (!acc[bowler][player_dismissed]) {
        acc[bowler][player_dismissed] = 0;
      }
      acc[bowler][player_dismissed]++;
    }
    return acc;
  }, {});

  // console.log(dismisalByBolwer);

  let highestDismisalbyAnotherPlayer = [];
  let max = 0;
  for (let bowler in dismisalByBolwer) {
    for (let batsman in dismisalByBolwer[bowler]) {
      if (dismisalByBolwer[bowler][batsman] > max) {
        max = dismisalByBolwer[bowler][batsman];
        highestDismisalbyAnotherPlayer = [];
        highestDismisalbyAnotherPlayer.push({
          bowler: bowler,
          batsman: batsman,
          count: max,
        });
      }
    }
  }

  // console.log(highestDismisalbyAnotherPlayer);
  return highestDismisalbyAnotherPlayer;
};

module.exports.OnedDismissedbyOther = OnedDismissedbyOther;
