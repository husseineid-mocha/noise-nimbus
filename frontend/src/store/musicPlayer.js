const MUSIC_PLAYER_OPEN = "musicPlayer/open";

const MUSIC_PLAYER_CLOSED = "musicPlayer/closed";

export const musicPlayerOpen = () => {
  return {
    type: MUSIC_PLAYER_OPEN,
  };
};

export const musicPlayerClosed = () => {
  return {
    type: MUSIC_PLAYER_CLOSED,
  };
};

const initialState = { open: false };

const musicPlayerReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case MUSIC_PLAYER_OPEN:
      newState = Object.assign({}, state, { open: true });
      return newState;
    case MUSIC_PLAYER_CLOSED:
      newState = Object.assign({}, state, { open: false });
      return newState;
    default:
      return state;
  }
};

export default musicPlayerReducer;
