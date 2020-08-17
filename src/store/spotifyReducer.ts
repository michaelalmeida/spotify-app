import {
  ApplicationActionTypes,
  AUTH_USER,
  SET_PLAYLISTS,
  PlaylistItems,
} from "./types";

export interface SpotifyInitialState {
  userToken: string;
  playlists: Array<PlaylistItems>;
}

export const initialState: SpotifyInitialState = {
  userToken: "",
  playlists: [],
};

export default function spotifyReducer(
  state = initialState,
  action: ApplicationActionTypes
): SpotifyInitialState {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        userToken: action.userToken,
      };
    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: [...action.playlists],
      };
    default:
      return state;
  }
}
