import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Redirect } from "react-router-dom";

import { authEndpoint, clientId, redirectUri } from "../../utils/config";
import hash from "../../utils/getHash";

import { SpotifyInitialState } from "../../store/spotifyReducer";
import { authUser } from "../../store/actions";

import { InnerContainer } from "../style/container/Container";
import Button from "../style/button/Button";

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
    dispatch(authUser(hash));
  }, [userToken, dispatch]);

  return (
    <InnerContainer>
      {userToken ? (
        <Redirect to="/" />
      ) : (
        <Button
          isLink
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}
        >
          Logar
        </Button>
      )}
    </InnerContainer>
  );
};

export default Login;
