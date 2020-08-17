import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { SpotifyInitialState } from "../../store/spotifyReducer";
import { getPlaylists } from "../../store/actions";
import { PlaylistItems } from "../../store/types";

import { InnerContainer } from "../style/container/Container";

const Playlist: React.FC = () => {
  const dispatch = useDispatch();

  interface StateProps {
    userToken: string;
    playlists: Array<PlaylistItems>;
  }

  const { userToken, playlists } = useSelector<SpotifyInitialState, StateProps>(
    (state: SpotifyInitialState) => {
      return {
        userToken: state.userToken,
        playlists: state.playlists,
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
