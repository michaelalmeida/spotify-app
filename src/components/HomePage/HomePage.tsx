import React from "react";
import Header from "../Header/Header";
import Playlists from "../Playlist/Playlist";

import { SimpleContainer } from "../style/container/Container";

const HomePage: React.FC = () => {
  return (
    <SimpleContainer>
      <Header />
      <Playlists />
    </SimpleContainer>
  );
};

export default HomePage;
