import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Redirect } from "react-router-dom";

import getHash from "../../utils/getHash";

import { SpotifyInitialState } from "../../store/spotifyReducer";
import { authUser } from "../../store/actions";

import { InnerContainer } from "../style/container/Container";

import LoginScreen from "./LoginScreen";

const Login: React.FC = () => {
  interface StateProps {
    userToken: string;
  }

  const { userToken } = useSelector<SpotifyInitialState, StateProps>(
    (state: SpotifyInitialState) => {
      return {
        userToken: state.userToken,
      };
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUser(getHash()));
  }, [userToken, dispatch]);

  return (
    <InnerContainer direction="row">
      {userToken ? <Redirect to="/" /> : <LoginScreen />}
    </InnerContainer>
  );
};

export default Login;
