import React from "react";
import Header from "../Header/Header";
import Playlists from "../Playlist/Playlist";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      Home page element <Playlists />
    </>
  );
};

export default HomePage;
