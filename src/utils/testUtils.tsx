/* eslint-disable import/prefer-default-export */
import React from "react";

import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../store/index";

const Providers = ({ children }: { children: React.ReactElement }) => (
  <Provider store={store}>{children}</Provider>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui: React.ReactElement, options?: any) => {
  const rendered = render(ui, { wrapper: Providers, ...options });
  return {
    ...rendered,
    store,
  };
};

export { customRender as renderWrapper };
