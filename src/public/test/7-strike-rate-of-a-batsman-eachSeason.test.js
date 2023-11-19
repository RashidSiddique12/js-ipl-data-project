/* eslint-disable no-undef */
const {
  strikeRateOfABatsmanEachSeason,
} = require("../../server/7-strike-rate-of-a-batsman-eachSeason");

test("Empty object", () => {
  expect(strikeRateOfABatsmanEachSeason([], [])).toEqual({});
});

test("for single ball and single run", () => {
  expect(
    strikeRateOfABatsmanEachSeason(
      [{ id: "1", season: "2016" }],
      [
        {
          batsman: "ER Dwivedi",
          batsman_runs: "1",
          match_id: "1",
          wide_runs: "0",
          noball_runs: "0",
        },
      ],
      "ER Dwivedi"
    )
  ).toEqual({
    "ER Dwivedi": {
      2016: "100.00",
    },
  });
});

test("for Multiple balls in single season", () => {
  expect(
    strikeRateOfABatsmanEachSeason(
      [{ id: "1", season: "2016" }],
      [
        {
          batsman: "ER Dwivedi",
          batsman_runs: "1",
          match_id: "1",
          wide_runs: "0",
          noball_runs: "0",
        },
        {
          batsman: "ER Dwivedi",
          batsman_runs: "0",
          match_id: "1",
          wide_runs: "1",
          noball_runs: "0",
        },
        {
          batsman: "ER Dwivedi",
          batsman_runs: "0",
          match_id: "1",
          wide_runs: "0",
          noball_runs: "1",
        },
        {
          batsman: "ER Dwivedi",
          batsman_runs: "4",
          match_id: "1",
          wide_runs: "0",
          noball_runs: "0",
        },
      ],
      "ER Dwivedi"
    )
  ).toEqual({
    "ER Dwivedi": {
      2016: "250.00",
    },
  });
});

test("for Multiple balls in single season multiple season", () => {
  expect(
    strikeRateOfABatsmanEachSeason(
      [
        { id: "1", season: "2016" },
        { id: "2", season: "2015" },
      ],
      [
        {
          batsman: "ER Dwivedi",
          batsman_runs: "1",
          match_id: "1",
          wide_runs: "0",
          noball_runs: "0",
        },

        {
          batsman: "Rashid",
          batsman_runs: "4",
          match_id: "2",
          wide_runs: "0",
          noball_runs: "0",
        },
        {
          batsman: "Rashid",
          batsman_runs: "0",
          match_id: "2",
          wide_runs: "0",
          noball_runs: "1",
        },
      ],
      "Rashid"
    )
  ).toEqual({
    Rashid: {
      2015: "400.00",
    },
  });
});

test("for Multiple balls in single season multiple season and same player", () => {
  expect(
    strikeRateOfABatsmanEachSeason(
      [
        { id: "1", season: "2016" },
        { id: "2", season: "2015" },
      ],
      [
        {
          batsman: "Rashid",
          batsman_runs: "1",
          match_id: "1",
          wide_runs: "0",
          noball_runs: "0",
        },

        {
          batsman: "Rashid",
          batsman_runs: "4",
          match_id: "1",
          wide_runs: "0",
          noball_runs: "0",
        },
        {
          batsman: "Rashid",
          batsman_runs: "1",
          match_id: "2",
          wide_runs: "0",
          noball_runs: "0",
        },
      ],
      "Rashid"
    )
  ).toEqual({
    Rashid: {
      2015: "100.00",
      2016: "250.00",
    },
  });
});
