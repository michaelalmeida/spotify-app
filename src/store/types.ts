export const AUTH_USER = "AUTH_USER";
export const SET_PLAYLISTS = "SET_PLAYLISTS";

export interface PlaylistItems {
  collaborative: boolean;
  description: string;
  external_urls: unknown;
  href: string;
  id: string;
  images: unknown;
  name: string;
  owner: unknown;
  primary_color: unknown;
  public: unknown;
  snapshot_id: string;
  tracks: unknown;
  type: string;
  uri: string;
}

interface AuthUSerAcation {
  type: typeof AUTH_USER;
  userToken: string;
}

interface PlaylistsAction {
  type: typeof SET_PLAYLISTS;
  playlists: Array<PlaylistItems>;
}

export type ApplicationActionTypes = AuthUSerAcation | PlaylistsAction;
