import { csrfFetch } from "./csrf";

const GET_SONGS = "songs/getSongs";
const GET_SONG = "songs/getSong";
const ADD_SONG = "songs/addSong";

const getSongs = (songs) => {
  return {
    type: GET_SONGS,
    payload: songs,
  };
};

const getSong = (song) => {
  return {
    type: GET_SONG,
    payload: song,
  };
};

const addSong = (song) => {
  return {
    type: ADD_SONG,
    payload: song,
  };
};

export const singleSong = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/songs/${id}`);

  const data = await response.json();
  dispatch(getSong(data));
};

export const songs = (songs) => async (dispatch) => {
  const response = await csrfFetch("/api/songs");

  const data = await response.json();
  dispatch(getSongs(data));
};

export const addNewSong = (song) => async (dispatch) => {
  const { title, description, image, audioFile, artistName, genreId } = song;

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", image);
  formData.append("artistName", artistName);
  formData.append("genreId", genreId);
  formData.append("audio", audioFile);

  console.log(formData);

  const res = await csrfFetch("/api/songUpload", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });
  const data = await res.json();

  dispatch(addSong(data));
  await dispatch(songs());
  // console.log(data);

  return data;
};

const initialState = {
  songs: [],
  activeSongId: 0,
};

const songReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SONGS:
      return { ...state, songs: action.payload.songs };
    case GET_SONG:
      return {
        ...state,
        currentSong: action.payload.song,
        activeSongId: action.payload.song.id,
      };
    case ADD_SONG:
      newState = Object.assign({}, state);
      newState.song = action.payload;
      return newState;
    default:
      return state;
  }
};

export default songReducer;
