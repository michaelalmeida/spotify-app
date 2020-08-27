import React from "react";

import { authEndpoint, clientId, redirectUri } from "../../utils/config";

import { InnerContainer } from "../style/container/Container";
import { H1, H3 } from "../style/titles/Titles";
import Button from "../style/button/Button";

const LoginScreen: React.FC = () => {
  return (
    <>
      <InnerContainer justifyContent="start" alignItems="flex-start" padding>
        <H1>Bem vindo!</H1>
        <H3>
          Para usar a aplicação você precisa se autentificar com uma conta do
          Spotify.
        </H3>
      </InnerContainer>
      <InnerContainer justifyContent="center">
        <Button
          isLink
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}
        >
          Logar
        </Button>
      </InnerContainer>
    </>
  );
};

export default LoginScreen;
