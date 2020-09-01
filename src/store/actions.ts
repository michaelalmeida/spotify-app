import axios from "axios";

import {
  AUTH_USER,
  SET_PLAYLISTS,
  ApplicationActionTypes,
  PlaylistItems,
} from "./types";

export function authUser(newToken: string): ApplicationActionTypes {
  return {
    type: AUTH_USER,
    userToken: newToken,
  };
}

export function setPlaylist(
  newPlaylists: Array<PlaylistItems>
): ApplicationActionTypes {
  return {
    type: SET_PLAYLISTS,
    playlists: newPlaylists,
  };
}

export const getPlaylists = (userToken: string) => {
  return (dispatch: (arg0: ApplicationActionTypes) => void): void => {
    axios
      .get("https://api.spotify.com/v1/browse/featured-playlists", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        dispatch(setPlaylist(res.data.playlists.items));
      })
      .catch((err) => err);
  };
};
