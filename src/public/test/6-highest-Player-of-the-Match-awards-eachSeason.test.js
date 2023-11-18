/* eslint-disable no-undef */
const {
  playerOfTheMatchAward,
} = require("../../server/6-highest-Player-of-the-Match-awards-eachSeason");

test("Empty data", () => {
  expect(playerOfTheMatchAward([{}])).toEqual({});
});

test("Single data", () => {
  expect(
    playerOfTheMatchAward([
      {
        season: "2017",
        player_of_match: "SPD Smith",
      },
    ])
  ).toEqual({ 2017: { name: "SPD Smith", number: 1 } });
});

test("Multiple player in same season", () => {
  expect(
    playerOfTheMatchAward([
      {
        season: "2017",
        player_of_match: "SPD Smith",
      },
      {
        season: "2017",
        player_of_match: "CA Lynn",
      },
      {
        season: "2017",
        player_of_match: "CA Lynn",
      },
      {
        season: "2017",
        player_of_match: "GJ Maxwell",
      },
    ])
  ).toEqual({ 2017: { name: "CA Lynn", number: 2 } });
});

test("Single player of the match in different season", () => {
  expect(
    playerOfTheMatchAward([
      {
        season: "2017",
        player_of_match: "SPD Smith",
      },
      {
        season: "2014",
        player_of_match: "CA Lynn",
      },
      {
        season: "2015",
        player_of_match: "GJ Maxwell",
      },
    ])
  ).toEqual({
    2017: { name: "SPD Smith", number: 1 },
    2014: { name: "CA Lynn", number: 1 },
    2015: { name: "GJ Maxwell", number: 1 },
  });
});


test("Multple data same and diffrent season", () => {
  expect(
    playerOfTheMatchAward([
      {
        season: "2017",
        player_of_match: "SPD Smith",
      },
      {
        season: "2017",
        player_of_match: "CA Lynn",
      },
      {
        season: "2017",
        player_of_match: "CA Lynn",
      },
      {
        season: "2017",
        player_of_match: "CA Lynn",
      },
      {
        season: "2014",
        player_of_match: "GJ Maxwell",
      },
      {
        season: "2015",
        player_of_match: "GJ Maxwell",
      },
    ])
  ).toEqual({
    2017: { name: "CA Lynn", number: 3 },
    2014: { name: "GJ Maxwell", number: 1 },
    2015: { name: "GJ Maxwell", number: 1 },
  });
});

