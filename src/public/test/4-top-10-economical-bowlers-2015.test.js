/* eslint-disable no-undef */
const {
  top10EconomicalBowlers2015,
} = require("../../server/4-top-10-economical-bowlers-2015");

test("Empty Object", () => {
  expect(top10EconomicalBowlers2015([{}], [{}])).toEqual([]);
});

test("Single Object", () => {
  expect(
    top10EconomicalBowlers2015(
      [{ id: "1", season: "2015" }],
      [
        {
          match_id: "1",
          bowler: "Siraj",
          total_runs: "1",
          wide_runs: "0",
          noball_runs: "0",
        },
      ]
    )
  ).toEqual([
    {
      bowler: "Siraj",
      economy: "6.00",
    },
  ]);
});

test("Multiple data of 2015", () => {
  expect(
    top10EconomicalBowlers2015(
      [
        { id: "1", season: "2015" },
        { id: "2", season: "2015" },
        { id: "3", season: "2015" },
      ],
      [
        {
          match_id: "1",
          bowler: "Siraj",
          total_runs: "1",
          wide_runs: "0",
          noball_runs: "0",
        },
        {
          match_id: "1",
          bowler: "Siraj",
          total_runs: "0",
          wide_runs: "0",
          noball_runs: "0",
        },
      ]
    )
  ).toEqual([
    {
      bowler: "Siraj",
      economy: "3.00",
    },
  ]);
});

test("Multiple data of same match_id", () => {
  expect(
    top10EconomicalBowlers2015(
      [{ id: "1", season: "2015" }],
      [
        {
          match_id: "1",
          bowler: "Siraj",
          total_runs: "1",
          wide_runs: "0",
          noball_runs: "0",
        },
        {
          match_id: "1",
          bowler: "Siraj",
          total_runs: "1",
          wide_runs: "1",
          noball_runs: "0",
        },
        {
          match_id: "1",
          bowler: "Siraj",
          total_runs: "1",
          wide_runs: "0",
          noball_runs: "1",
        },
      ]
    )
  ).toEqual([
    {
      bowler: "Siraj",
      economy: "18.00",
    },
  ]);
});

test("Multiple data of 2015", () => {
  expect(
    top10EconomicalBowlers2015(
      [
        { id: "1", season: "2015" },
        { id: "2", season: "2015" },
        { id: "3", season: "2015" },
      ],
      [
        {
          match_id: "1",
          bowler: "Siraj",
          total_runs: "1",
          wide_runs: "0",
          noball_runs: "0",
        },
        {
          match_id: "2",
          bowler: "Bhumra",
          total_runs: "0",
          wide_runs: "",
          noball_runs: "0",
        },
        {
          match_id: "3",
          bowler: "Kuldeep",
          total_runs: "4",
          wide_runs: "0",
          noball_runs: "0",
        },
      ]
    )
  ).toEqual([
    {
      bowler: "Siraj",
      economy: "6.00",
    },
    {
      bowler: "Bhumra",
      economy: "NaN",
    },
    {
      bowler: "Kuldeep",
      economy: "24.00",
    },
  ]);
});
