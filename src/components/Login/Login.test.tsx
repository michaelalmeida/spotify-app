import React from "react";
import { cleanup } from "@testing-library/react";
import { screen, getByTestId, queryByTestId } from "@testing-library/dom";

import { renderWithStore } from "../../utils/testUtils";

import Login from "./Login";

afterEach(cleanup);

describe("<Login />", () => {
  test("renders the Login component", () => {
    const { container } = renderWithStore(<Login />);

    expect(getByTestId(container, "login-component")).toBeTruthy();
  });

  test("not render <LoginScreen /> when userToken has setted", () => {
    const { container } = renderWithStore(<Login />, {
      spotify: {
        userToken: "usertokenNotEmpty",
        playlists: [],
      },
    });

    expect(queryByTestId(container, "login-screen")).toBeFalsy();
  });

  test("renders <LoginScreen /> when userToken has setted", () => {
    renderWithStore(<Login />, {
      spotify: {
        userToken: "",
        playlists: [],
      },
    });

    const btnLogin = screen.getByRole("link", { name: /logar/i });

    expect(btnLogin).toBeTruthy();
  });
});
