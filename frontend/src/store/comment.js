import { csrfFetch } from "./csrf";

export const CREATE_COMMENT = "comment/CREATE_COMMENT";
export const ALL_COMMENTS = "comment/ALL_COMMENTS";

const create = (payload) => {
  return {
    type: CREATE_COMMENT,
    payload,
  };
};

const allComments = (comments) => {
  return {
    type: ALL_COMMENTS,
    comments,
  };
};

export const createComment = (payload, id) => async (dispatch) => {
  debugger;
  const response = await csrfFetch(`/api/comment/${id}`, {
    method: "POST",
    body: JSON.stringify({ payload, id }),
  });
  const data = await response.json();
  dispatch(create(data.comment));
  return data;
};

export const getAllComments = () => async (dispatch) => {
  const response = await csrfFetch("/api/comment");

  const data = await response.json();
  dispatch(allComments(data.comments));
};

const initialState = [];

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return [...state, action.payload];
    case ALL_COMMENTS:
      return [...action.comments];
    default:
      return state;
  }
};

export default commentReducer;
