import { csrfFetch } from "./csrf";

const GET_SONGS = "songs/getSongs";

const getSongs = (songs) => {
  return {
    type: GET_SONGS,
    payload: songs,
  };
};
export const songs = (songs) => async (dispatch) => {
  const response = await csrfFetch("/api/songs");

  const data = await response.json();
  dispatch(getSongs(data));
};

const initialState = [];

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      const newSongs = [];
      action.payload.songs.forEach((song) => {
        newSongs.push(song);
      });
      return newSongs;
    default:
      return state;
  }
};

export default songReducer;
