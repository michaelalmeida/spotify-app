import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getPlaylists } from "../../store/actions";
import { PlaylistItems } from "../../store/types";

import { InnerContainer } from "../style/container/Container";

const Playlist: React.FC = () => {
  const dispatch = useDispatch();

  interface StateProps {
    userToken: string;
    playlists: Array<PlaylistItems>;
  }

  interface SpotifyInitialState {
    spotify: {
      userToken: string;
      playlists: Array<PlaylistItems>;
    };
  }

  const { userToken, playlists } = useSelector<SpotifyInitialState, StateProps>(
    (state: SpotifyInitialState) => {
      return {
        userToken: state.spotify.userToken,
        playlists: state.spotify.playlists,
      };
    }
  );

  useEffect(() => {
    dispatch(getPlaylists(userToken));
  }, [dispatch, userToken]);

  return playlists ? (
    <InnerContainer>{playlists.map((list) => list.name)}</InnerContainer>
  ) : (
    <InnerContainer>Teste2</InnerContainer>
  );
};

export default Playlist;
