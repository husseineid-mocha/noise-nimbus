import { csrfFetch } from "./csrf";

export const CREATE_COMMENT = "comment/CREATE_COMMENT";
export const ALL_COMMENTS = "comment/ALL_COMMENTS";
export const DELETE_COMMENT = "comment/DELETE_COMMENT";
export const COMMENT_USER = "comment/COMMENT_USER";

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

const songComments = (comments) => {
  return {
    type: ALL_COMMENTS,
    comments,
  };
};

const deleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    commentId,
  };
};

const commentUser = (userId) => {
  return {
    type: COMMENT_USER,
    commentUser,
  };
};

export const createComment = (payload, id) => async (dispatch) => {
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

export const getSongComments = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/comment/${id}`);

  const data = await response.json();
  dispatch(songComments(data.comments));
};

export const deleteAComment = (id) => async (dispatch) => {
  await csrfFetch(`/api/comment/delete/${id}`, {
    method: "post",
  });

  dispatch(deleteComment(id));
};

export const getCommentUsers = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/comment/user`);
  const data = await response.json();
  dispatch(commentUser(id));
  return data;
};

const initialState = [];

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return [...state, action.payload];
    case ALL_COMMENTS:
      return [...action.comments];
    case DELETE_COMMENT:
      return state.filter((comment) => comment.id !== action.commentId);
    case COMMENT_USER:
      return action.commentUser;
    default:
      return state;
  }
};

export default commentReducer;
