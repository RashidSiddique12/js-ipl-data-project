/* eslint-disable no-undef */
const {
  getbestEconomyInSuperOver,
} = require("../../server/9-best-Economy-in-superOver");

test("Empty object", () => {
  expect(getbestEconomyInSuperOver([{}])).toEqual([]);
});

test("Single ball of super over", () => {
  expect(
    getbestEconomyInSuperOver([
      {
        is_super_over: "1",
        ball: "1",
        bowler: "shami",
        total_runs: "1",
        wide_runs: "0",
        noball_runs: "0",
      },
    ])
  ).toEqual([{ bowler: "shami", economy: "6.00" }]);
});

test("Multiple balls, some wide and noball also there", () => {
  expect(
    getbestEconomyInSuperOver([
      {
        is_super_over: "1",
        ball: "1",
        bowler: "shami",
        total_runs: "1",
        wide_runs: "0",
        noball_runs: "0",
      },
      {
        is_super_over: "1",
        ball: "2",
        bowler: "shami",
        total_runs: "1",
        wide_runs: "1",
        noball_runs: "0",
      },
      {
        is_super_over: "1",
        ball: "3",
        bowler: "shami",
        total_runs: "1",
        wide_runs: "0",
        noball_runs: "1",
      },
      {
        is_super_over: "1",
        ball: "4",
        bowler: "shami",
        total_runs: "1",
        wide_runs: "0",
        noball_runs: "0",
      },
    ])
  ).toEqual([{ bowler: "shami", economy: "12.00" }]);
});

test("Multiple balls but bowler not given any runs", () => {
  expect(
    getbestEconomyInSuperOver([
      {
        is_super_over: "1",
        ball: "1",
        bowler: "shami",
        total_runs: "0",
        wide_runs: "0",
        noball_runs: "0",
      },
      {
        is_super_over: "1",
        ball: "2",
        bowler: "shami",
        total_runs: "0",
        wide_runs: "0",
        noball_runs: "0",
      },
      {
        is_super_over: "1",
        ball: "3",
        bowler: "shami",
        total_runs: "0",
        wide_runs: "0",
        noball_runs: "0",
      },
      {
        is_super_over: "1",
        ball: "4",
        bowler: "shami",
        total_runs: "0",
        wide_runs: "0",
        noball_runs: "0",
      },
    ])
  ).toEqual([{ bowler: "shami", economy: "0.00" }]);
});

test("if not a super over", () => {
  expect(
    getbestEconomyInSuperOver([
      {
        over: "1",
        is_super_over: "0",
        ball: "1",
        bowler: "shami",
        total_runs: "1",
        wide_runs: "0",
        noball_runs: "0",
      },
    ])
  ).toEqual([]);
});

test("Multiple bowlers", () => {
    expect(
      getbestEconomyInSuperOver([
        {
          is_super_over: "1",
          ball: "1",
          bowler: "shami",
          total_runs: "1",
          wide_runs: "0",
          noball_runs: "0",
        },
        {
          is_super_over: "1",
          ball: "2",
          bowler: "Siraj",
          total_runs: "0",
          wide_runs: "0",
          noball_runs: "0",
        },
        {
          is_super_over: "1",
          ball: "3",
          bowler: "Siraj",
          total_runs: "1",
          wide_runs: "0",
          noball_runs: "0",
        },
        
      ])
    ).toEqual([{ bowler: "Siraj", economy: "3.00" }]);
  });