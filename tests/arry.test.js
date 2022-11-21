import { isEqualArray } from "../src/array.js";

// isEqualArray
test("isEqualArray(null, null) == true", () => {
  expect(isEqualArray(null, null)).toBe(true);
});

test("isEqualArray([], null) == true", () => {
  expect(isEqualArray([], null)).toBe(true);
});

test("isEqualArray(null, [] == true", () => {
  expect(isEqualArray(null, [])).toBe(true);
});

test("isEqualArray([1], [2]) == false", () => {
  expect(isEqualArray([1], [2])).toBe(false);
});
