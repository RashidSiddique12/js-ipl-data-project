/* eslint-disable no-undef */
const {
  extraRunsconcedecPerteam2016,
} = require("../../server/3-extra-runs-conceded-per-team-2016");

test("Empty object", () => {
  expect(extraRunsconcedecPerteam2016([{}], [{}])).toEqual({});
});

test("Single data", () => {
  expect(
    extraRunsconcedecPerteam2016(
      [{ id: 1, season: "2016" }],
      [{ match_id: 1, bowling_team: "Mumbai", extra_runs: "10" }]
    )
  ).toEqual({
    Mumbai: 10,
  });
});

test("If different season data present", () => {
  expect(
    extraRunsconcedecPerteam2016(
      [
        { id: 1, season: "2016" },
        { id: 2, season: "2016" },
      ],
      [
        { match_id: 1, bowling_team: "Mumbai", extra_runs: "10" },
        { match_id: 5, bowling_team: "Punjab", extra_runs: "15" },
      ]
    )
  ).toEqual({
    Mumbai: 10,
  });
});
