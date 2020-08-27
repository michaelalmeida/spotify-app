import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import GlobalStyles from "./components/style/globalStyle";
import { Container } from "./components/style/container/Container";

import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";

interface SpotifyReducer {
  spotify: {
    userToken: string;
  };
}

const App: React.FC = () => {
  const userToken = useSelector<SpotifyReducer, string>(
    (state: SpotifyReducer) => state.spotify.userToken
  );

  return (
    <Container background>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/login/" component={Login} />
          <Route exact path="/">
            {userToken ? <HomePage /> : <Redirect to="/login/" />}
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
