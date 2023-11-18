const { matchPerYear } = require("../../server/1-matches-per-year");

// eslint-disable-next-line no-undef
test("Passing Empty data", () => {
  // eslint-disable-next-line no-undef
  expect(matchPerYear([{}])).toEqual({});
});

// eslint-disable-next-line no-undef
test("Passing single data", () => {
  // eslint-disable-next-line no-undef
  expect(matchPerYear([{ season: "2017" }])).toEqual({ 2017: 1 });
});

// eslint-disable-next-line no-undef
test("Passing same data multiple time", () => {
  // eslint-disable-next-line no-undef
  expect(
    matchPerYear([
      { season: "2017" },
      { season: "2017" },
      { season: "2017" },
      { season: "2017" },
      { season: "2017" },
    ])
  ).toEqual({ 2017: 5 });
});

// eslint-disable-next-line no-undef
test("Passing different data single times", () => {
  // eslint-disable-next-line no-undef
  expect(
    matchPerYear([
      { season: "2017" },
      { season: "2015" },
      { season: "2014" },
      { season: "2013" },
      { season: "2011" },
    ])
  ).toEqual({ 2017: 1, 2015: 1, 2014: 1, 2013: 1, 2011: 1 });
});

// eslint-disable-next-line no-undef
test("Passing different data some are multiple time and other are single", () => {
  // eslint-disable-next-line no-undef
  expect(
    matchPerYear([
      { season: "2017" },
      { season: "2015" },
      { season: "2014" },
      { season: "2013" },
      { season: "2011" },
      { season: "2017" },
      { season: "2017" },
      { season: "2013" },
    ])
  ).toEqual({ 2017: 3, 2015: 1, 2014: 1, 2013: 2, 2011: 1 });
});
