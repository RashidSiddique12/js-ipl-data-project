/* eslint-disable no-undef */

const {
  EachTeamsWonTossAsWellAsMatch,
} = require("../../server/5-Number-of-times-each-team-won-toss-also-match");

test("Empty Arrays of Object", () => {
  expect(EachTeamsWonTossAsWellAsMatch([{}])).toEqual({});
});

test("single object in Array and winner and toss winner is same", () => {
  expect(
    EachTeamsWonTossAsWellAsMatch([
      {
        toss_winner: "Royal Challengers Bangalore",
        winner: "Royal Challengers Bangalore",
      },
    ])
  ).toEqual({ "Royal Challengers Bangalore": 1 });
});

test("single object in Array but toss winner and winner is diffrent ", () => {
  expect(
    EachTeamsWonTossAsWellAsMatch([
      {
        toss_winner: "Sunrisers Hyderabad",
        winner: "Royal Challengers Bangalore",
      },
    ])
  ).toEqual({});
});

test("Two different data, same data has multiple time and other different single time", () => {
  expect(
    EachTeamsWonTossAsWellAsMatch([
      {
        toss_winner: "Sunrisers Hyderabad",
        winner: "Royal Challengers Bangalore",
      },
      {
        toss_winner: "Royal Challengers Bangalore",
        winner: "Royal Challengers Bangalore",
      },
      {
        toss_winner: "Royal Challengers Bangalore",
        winner: "Royal Challengers Bangalore",
      },
      {
        toss_winner: "Royal Challengers Bangalore",
        winner: "Royal Challengers Bangalore",
      },
    ])
  ).toEqual({ "Royal Challengers Bangalore": 3 });
});

test("Multiple data", () => {
  expect(
    EachTeamsWonTossAsWellAsMatch([
      {
        toss_winner: "Sunrisers Hyderabad",
        winner: "Royal Challengers Bangalore",
      },
      {
        toss_winner: "Royal Challengers Bangalore",
        winner: "Royal Challengers Bangalore",
      },
      {
        toss_winner: "Royal Challengers Bangalore",
        winner: "Royal Challengers Bangalore",
      },
      {
        toss_winner: "Rising Pune Supergiant",
        winner: "Rising Pune Supergiant",
      },
      {
        toss_winner: "Rising Pune Supergiant",
        winner: "Rising Pune Supergiant",
      },
      {
        toss_winner: "Rising Pune Supergiant",
        winner: "Rising Pune Supergiant",
      },
      {
        toss_winner: "Sunrisers Hyderabad",
        winner: "Sunrisers Hyderabad",
      },
      {
        toss_winner: "Rising Pune Supergiant",
        winner: "Sunrisers Hyderabad",
      },
    ])
  ).toEqual({
    "Royal Challengers Bangalore": 2,
    "Rising Pune Supergiant": 3,
    "Sunrisers Hyderabad": 1,
  });
});
