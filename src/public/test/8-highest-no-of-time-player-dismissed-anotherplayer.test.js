/* eslint-disable no-undef */
const {
  OnedDismissedbyOther,
} = require("../../server/8-highest-no-of-time-player-dismissed-anotherplayer");

test("Empty Object", () => {
  expect(OnedDismissedbyOther([{}])).toEqual([]);
});

test("Single Object", () => {
    expect(
      OnedDismissedbyOther([
        {
          bowler: "A Choudhary",
          player_dismissed: "DA Warner",
          dismissal_kind: "caught",
        },
      ])
    ).toEqual([{ bowler: "A Choudhary", batsman: "DA Warner", count: 1 }]);
  });

test("Single Object but dismissal_kind run out", () => {
  expect(
    OnedDismissedbyOther([
      {
        bowler: "A Choudhary",
        player_dismissed: "DA Warner",
        dismissal_kind: "run out",
      },
    ])
  ).toEqual([]);
});

test("Multiple Object of same data", () => {
  expect(
    OnedDismissedbyOther([
      {
        bowler: "A Choudhary",
        player_dismissed: "DA Warner",
        dismissal_kind: "caught",
      },
      {
        bowler: "A Choudhary",
        player_dismissed: "DA Warner",
        dismissal_kind: "caught",
      },
      {
        bowler: "A Choudhary",
        player_dismissed: "DA Warner",
        dismissal_kind: "caught",
      },
    ])
  ).toEqual([{ bowler: "A Choudhary", batsman: "DA Warner", count: 3 }]);
});


test("Multiple Object but diffrent data", () => {
    expect(
      OnedDismissedbyOther([
        {
          bowler: "A Choudhary",
          player_dismissed: "Warner",
          dismissal_kind: "caught",
        },
        {
          bowler: "TS Mills",
          player_dismissed: "Rohit",
          dismissal_kind: "bowled",
        },
        {
          bowler: "TS Mills",
          player_dismissed: "Rohit",
          dismissal_kind: "run out",
        },
        {
            bowler: "A Choudhary",
            player_dismissed: "Warner",
            dismissal_kind: "bolwed",
          },
      ])
    ).toEqual([{ bowler: "A Choudhary", batsman: "Warner", count: 2 }]);
  });
