// Find the bowler with the best economy in super overs

const getbestEconomyInSuperOver = (deliveries) => {
  const ballInSuperOver = deliveries.reduce((acc, delivery) => {
    const { is_super_over, bowler, total_runs, wide_runs, noball_runs } = delivery;

    if(bowler === undefined) return acc;

    if (is_super_over !== "0") {
      if (!acc[bowler]) {
        acc[bowler] = { runs: 0, balls: 0 };
      }
      acc[bowler].runs += parseInt(total_runs);
      acc[bowler].balls += wide_runs === "0" && noball_runs === "0" ? 1 : 0;
    }
    return acc;
  }, {});

  //making Arrays for sorting and finding Economy
  const ballInSuperOverArray = Object.entries(ballInSuperOver).map(
    ([bowler, data]) => ({
      bowler: bowler,
      economy: ((data.runs / data.balls) * 6).toFixed(2),
    })
  );

  // console.log(ballInSuperOverArray);
  ballInSuperOverArray.sort((a, b) => a.economy - b.economy);

  const bestEconomyInSuperOver = ballInSuperOverArray.slice(0, 1);
  /*  */
  // console.log(bestEconomyInSuperOver);
  return bestEconomyInSuperOver;
};

module.exports.getbestEconomyInSuperOver = getbestEconomyInSuperOver;
