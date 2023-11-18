/* eslint-disable no-undef */
const {
  matchesWonPerteamPerYear,
} = require("../../server/2-matches-won-per-team-per-year");

test("Empty data", () => {
  expect(matchesWonPerteamPerYear([{}])).toEqual({});
});

test("Single data", () => {
  expect(
    matchesWonPerteamPerYear([
      { season: "2017", winner: "Sunrisers Hyderabad" },
    ])
  ).toEqual({
    "Sunrisers Hyderabad": {
      2017: 1,
    },
  });
});

test("Multiple data in same year", () => {
  expect(
    matchesWonPerteamPerYear([
      { season: "2017", winner: "Sunrisers Hyderabad" },
      { season: "2017", winner: "Rising Pune Supergiant" },
      { season: "2017", winner: "Kolkata Knight Riders" },
      { season: "2017", winner: "Kings XI Punjab" },
      { season: "2017", winner: "Royal Challengers Bangalore" },
    ])
  ).toEqual({
    "Sunrisers Hyderabad": {
      2017: 1,
    },
    "Rising Pune Supergiant": {
      2017: 1,
    },
    "Kolkata Knight Riders": {
      2017: 1,
    },
    "Kings XI Punjab": {
      2017: 1,
    },
    "Royal Challengers Bangalore": {
      2017: 1,
    },
  });
});

test("different winner in different year", () => {
  expect(
    matchesWonPerteamPerYear([
      { season: "2017", winner: "Sunrisers Hyderabad" },
      { season: "2014", winner: "Rising Pune Supergiant" },
      { season: "2013", winner: "Kolkata Knight Riders" },
      { season: "2012", winner: "Kings XI Punjab" },
      { season: "2011", winner: "Royal Challengers Bangalore" },
    ])
  ).toEqual({
    "Sunrisers Hyderabad": {
      2017: 1,
    },
    "Rising Pune Supergiant": {
      2014: 1,
    },
    "Kolkata Knight Riders": {
      2013: 1,
    },
    "Kings XI Punjab": {
      2012: 1,
    },
    "Royal Challengers Bangalore": {
      2011: 1,
    },
  });
});



test("Multiple times same winner in same year and different winner in different year", () => {
    expect(
      matchesWonPerteamPerYear([
        { season: "2017", winner: "Sunrisers Hyderabad" },
        { season: "2014", winner: "Sunrisers Hyderabad" },
        { season: "2014", winner: "Sunrisers Hyderabad" },
        { season: "2013", winner: "Sunrisers Hyderabad" },
        { season: "2014", winner: "Rising Pune Supergiant" },
        { season: "2014", winner: "Rising Pune Supergiant" },
        { season: "2014", winner: "Rising Pune Supergiant" },
        { season: "2013", winner: "Kolkata Knight Riders" },
        { season: "2012", winner: "Kings XI Punjab" },
        { season: "2011", winner: "Royal Challengers Bangalore" },
      ])
    ).toEqual({
      "Sunrisers Hyderabad": {
        2017: 1,
        2014 : 2,
        2013 : 1,
      },
      "Rising Pune Supergiant": {
        2014: 3,
      },
      "Kolkata Knight Riders": {
        2013: 1,
      },
      "Kings XI Punjab": {
        2012: 1,
      },
      "Royal Challengers Bangalore": {
        2011: 1,
      },
    });
  });