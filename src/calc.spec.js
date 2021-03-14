const { sum } = require("./calc");

describe("calc helpers", () => {
  test("sum function", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2, 3, 4)).toBe(10);
    expect(sum(1)).toBe(1);
  });
});
