import { isEmpty } from "../src/utils.js";

// isEmpty
test("isEmpty(null) == true", () => {
  expect(isEmpty(null)).toBe(true);
});

test("isEmpty(undefined) == true", () => {
  expect(isEmpty(undefined)).toBe(true);
});

test("isEmpty(0) == true", () => {
  expect(isEmpty(0)).toBe(true);
});

test("isEmpty('') == true", () => {
  expect(isEmpty("")).toBe(true);
});

test("isEmpty([]) == true", () => {
  expect(isEmpty([])).toBe(true);
});

test("isEmpty({}) == true", () => {
  expect(isEmpty({})).toBe(true);
});

test("isEmpty([1]) == false", () => {
  expect(isEmpty([1])).toBe(false);
});

test("isEmpty({name: 'Tom'}) == false", () => {
  expect(isEmpty({ name: "Tom" })).toBe(false);
});
