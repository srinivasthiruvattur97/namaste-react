import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import AppStore from "../../utils/store/AppStore";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});
it("Should have login button", () => {
  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should have cart item", () => {
  const cartItem = screen.getByText(/Cart/);

  expect(cartItem).toBeInTheDocument();
});

it("should change the login button to logout on click", () => {
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
