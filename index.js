const matches = require('./src/data/matches.json');
const deliveries = require('./src/data/deliveries.json');
const fs = require('fs');
const {matchPerYear} = require('./src/server/1-matches-per-year');
const {matchesWonPerteamPerYear} = require('./src/server/2-matches-won-per-team-per-year');
const {extraRunsconcedecPerteam2016} = require('./src/server/3-extra-runs-conceded-per-team-2016');
const {top10EconomicalBowlers2015} = require('./src/server/4-top-10-economical-bowlers-2015');
const {EachTeamsWonTossAsWellAsMatch} = require('./src/server/5-Number-of-times-each-team-won-toss-also-match');
const {playerOfTheMatchAward} = require('./src/server/6-highest-Player-of-the-Match-awards-eachSeason');
const { strikeRateOfABatsmanEachSeason } = require('./src/server/7-strike-rate-of-a-batsman-eachSeason');
const { OnedDismissedbyOther } = require('./src/server/8-highest-no-of-time-player-dismissed-anotherplayer');
const { getbestEconomyInSuperOver } = require('./src/server/9-best-Economy-in-superOver');

const matchesPerYear_1 = matchPerYear(matches);
fs.writeFileSync('./src/public/output/matchesPerYear.json', JSON.stringify(matchesPerYear_1, null, 2));

const matchesWonPerteamPerYear_2 = matchesWonPerteamPerYear(matches);
fs.writeFileSync('./src/public/output/matchesWonPerTeamPerYear.json', JSON.stringify(matchesWonPerteamPerYear_2, null, 2));

const extraRunsconcedecPerteam2016_3 = extraRunsconcedecPerteam2016(matches, deliveries);
fs.writeFileSync('./src/public/output/extraRunsConcededPerTeam1016.json', JSON.stringify(extraRunsconcedecPerteam2016_3, null, 2));

const top10EconomicalBowlers2015_4 = top10EconomicalBowlers2015(matches, deliveries);
fs.writeFileSync('./src/public/output/top10EconomicalBowlers2015.json', JSON.stringify(top10EconomicalBowlers2015_4, null , 2));

const EachTeamsWonTossAsWellAsMatch_5 = EachTeamsWonTossAsWellAsMatch(matches);
fs.writeFileSync('./src/public/output/teamWonTossAsWellAsMatch.json', JSON.stringify(EachTeamsWonTossAsWellAsMatch_5, null , 2));


const playerOfTheMatchAward_6 = playerOfTheMatchAward(matches); 
fs.writeFileSync('./src/public/output/highestPlayerOftheMatchAwardEachSeason.json', JSON.stringify(playerOfTheMatchAward_6, null , 2));

const strikeRateOfABatsmanEachSeason_7 = strikeRateOfABatsmanEachSeason(matches, deliveries)
fs.writeFileSync('./src/public/output/strikeRateOfABatsmanEachSeason.json', JSON.stringify(strikeRateOfABatsmanEachSeason_7, null , 2));

const OnedDismissedbyOther_8 = OnedDismissedbyOther(deliveries)
fs.writeFileSync('./src/public/output/highestNoOfTimesOnePlayerDismmedByOther.json', JSON.stringify(OnedDismissedbyOther_8, null , 2));

const getbestEconomyInSuperOver_9 = getbestEconomyInSuperOver(deliveries);
fs.writeFileSync('./src/public/output/bestEconomyInSuperOver.json', JSON.stringify(getbestEconomyInSuperOver_9, null , 2));


