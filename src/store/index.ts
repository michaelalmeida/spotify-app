import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import spotifyReducer, { initialState } from "./spotifyReducer";

const store = createStore(
  spotifyReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
