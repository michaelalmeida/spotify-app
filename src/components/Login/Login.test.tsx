import React from "react";
import { cleanup } from "@testing-library/react";
import { createStore } from "redux";

import { renderWrapper } from "../../utils/testUtils";

import Login from "./Login";

afterEach(cleanup);

describe("<Login />", () => {
  test("renders the Login component", () => {
    const { container } = renderWrapper(<Login />);
    const dataTestId = container.getElementsByTagName("div")[0];
    expect(dataTestId.getAttribute("data-testid")).toBe("login-component");
  });

  test("renders <LoginScreen /> when userToken has setted", () => {
    const store = createStore(() => ({ userToken: "usertoken" }));
    const { container } = renderWrapper(<Login />, store);
    const dataTestId = container.querySelectorAll("div")[1];
    expect(dataTestId.getAttribute("data-testid")).toBe("login-screen");
  });
});
