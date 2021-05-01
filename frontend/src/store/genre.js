import { csrfFetch } from "./csrf";

const SET_GENRES = "ui/setGenres";

const setGenres = (genres) => {
  return {
    type: SET_GENRES,
    payload: genres,
  };
};

export const getGenres = () => async (dispatch) => {
  const res = await fetch("/api/genre");
  const data = await res.json();
  dispatch(setGenres(data));
};

const initialState = { genres: [] };

const genreReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_GENRES:
      newState = Object.assign({}, state);
      newState.genres = action.payload;
      return newState;
    default:
      return state;
  }
};

export default genreReducer;
