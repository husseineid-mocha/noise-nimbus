import { csrfFetch } from "./csrf";

const GET_SONGS = "songs/getSongs";
const GET_SONG = "songs/getSong";

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

const initialState = {
  songs: [
    // {
    //   artistId: 3,
    //   audioFile:
    //     "https://noisenimbussongs.s3.amazonaws.com/Eminem+-+Mockingbird.mp3",
    //   createdAt: "2021-02-23T18:47:03.463Z",
    //   description: "",
    //   genreId: 2,
    //   id: 0,
    //   image: "https://noisenimbussongs.s3.amazonaws.com/The_Eminem_Show.jpg",
    //   title: "Mockingbird",
    //   updatedAt: "2021-02-23T18:47:03.463Z",
    // },
  ],
  activeSongId: -1,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return { ...state, songs: action.payload.songs };
    case GET_SONG:
      return {
        ...state,
        currentSong: action.payload.song,
        activeSongId: action.payload.song.id,
      };
    default:
      return state;
  }
};

export default songReducer;
