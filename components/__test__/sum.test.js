import { sum } from "../Sum";

test("should add two numbers", () => {
  const result = sum(2, 3);

  expect(result).toBe(5);
});
