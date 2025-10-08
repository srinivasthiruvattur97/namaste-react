import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("should check the contact component renders correctly", () => {
  render(<Contact />);

  const heading = screen.getAllByRole("heading");
  expect(heading.length).toBe(2);
});

test("should to submit button", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button);
});
