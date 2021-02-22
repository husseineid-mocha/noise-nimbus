const MODAL_ACTIVE_LOGIN = "loginModal/active";
const MODAL_DEACTIVATE_LOGIN = "loginModal/deactivate";
const MODAL_ACTIVE_SIGNUP = "signUpModal/active";
const MODAL_DEACTIVATE_SIGNUP = "signUpModal/deactivate";

export const activateLogin = () => {
  return {
    type: MODAL_ACTIVE_LOGIN,
  };
};

export const deactivateLogin = () => {
  return {
    type: MODAL_DEACTIVATE_LOGIN,
  };
};

export const activateSignUp = () => {
  return {
    type: MODAL_ACTIVE_SIGNUP,
  };
};

export const deactivateSignUp = () => {
  return {
    type: MODAL_DEACTIVATE_SIGNUP,
  };
};

const initialState = { login: false, signup: false };
const modalReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case MODAL_ACTIVE_LOGIN:
      newState = Object.assign({}, state, { login: true });
      return newState;
    case MODAL_DEACTIVATE_LOGIN:
      newState = Object.assign({}, state, { login: false });
      return newState;
    case MODAL_ACTIVE_SIGNUP:
      newState = Object.assign({}, state, { signup: true });
      return newState;
    case MODAL_DEACTIVATE_SIGNUP:
      newState = Object.assign({}, state, { signup: false });
      return newState;
    default:
      return state;
  }
};
export default modalReducer;
