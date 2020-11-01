import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { SpotifyInitialState } from "../../store/spotifyReducer";

import { getPlaylists } from "../../store/actions";

import { InnerContainer } from "../style/container/Container";

import PlaylistCard from "./PlaylistCard/PlaylistCard";

const Playlist: React.FC = () => {
  const dispatch = useDispatch();

  const { userToken, playlists } = useSelector<
    SpotifyInitialState,
    SpotifyInitialState
  >((state: SpotifyInitialState) => {
    return {
      userToken: state.userToken,
      playlists: state.playlists,
    };
  });

  useEffect(() => {
    dispatch(getPlaylists(userToken));
  }, [dispatch, userToken]);

  return playlists ? (
    <InnerContainer direction="row" justifyContent="flex-start">
      {playlists.map((list) => (
        <PlaylistCard
          key={list.uri}
          name={list.name}
          image={list.images[1]?.url || ""}
          description={list.description}
          uri={list.uri}
        />
      ))}
    </InnerContainer>
  ) : (
    <InnerContainer>Teste2</InnerContainer>
  );
};

export default Playlist;
