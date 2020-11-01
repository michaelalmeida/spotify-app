import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import getHash from "../../utils/getHash";

import { authUser } from "../../store/actions";
import { UserTokenState } from "../../store/spotifyReducer";

import { InnerContainer } from "../style/container/Container";

import LoginScreen from "./LoginScreen";

const Login: React.FC = () => {
  const { userToken } = useSelector<UserTokenState, UserTokenState>(
    (state: UserTokenState) => {
      return {
        userToken: state.userToken,
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
