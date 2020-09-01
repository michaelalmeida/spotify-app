import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

import getHash from "../../utils/getHash";

import { authUser } from "../../store/actions";

import { InnerContainer } from "../style/container/Container";

import LoginScreen from "./LoginScreen";

const Login: React.FC = () => {
  interface StateProps {
    userToken: string;
  }

  interface SpotifyInitialState {
    spotify: {
      userToken: string;
    };
  }

  const { userToken } = useSelector<SpotifyInitialState, StateProps>(
    (state: SpotifyInitialState) => {
      return {
        userToken: state.spotify.userToken,
      };
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (getHash()) dispatch(authUser(getHash()));
  }, [userToken, dispatch]);

  return (
    <InnerContainer direction="row" data-testid="login-component">
      {userToken ? (
        <Redirect to="/" />
      ) : (
        <div data-testid="login-screen">
          <LoginScreen />
        </div>
      )}
    </InnerContainer>
  );
};

export default Login;
