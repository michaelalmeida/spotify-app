/* eslint-disable import/prefer-default-export */
import React from "react";

import { render } from "@testing-library/react";
import { createStore } from "redux";

import { Provider } from "react-redux";
import store from "../store/index";
import reducers from "../store/reducers";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const renderWithStore = (
  children: React.ReactElement,
  // eslint-disable-next-line @typescript-eslint/ban-types
  initialState?: object
) => {
  const customStore = initialState ? createStore(reducers) : store;

  return render(<Provider store={customStore}>{children}</Provider>);
};
