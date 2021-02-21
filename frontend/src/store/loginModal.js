const MODAL_ACTIVE_LOGIN = "loginModal/active";
const MODAL_DEACTIVATE_LOGIN = "loginModal/deactivate";

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

const initialState = false;
const loginModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ACTIVE_LOGIN:
      state = true;
      return state;
    case MODAL_DEACTIVATE_LOGIN:
      state = false;
      return state;
    default:
      return state;
  }
};
export default loginModalReducer;
