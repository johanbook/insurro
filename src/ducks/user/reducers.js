import types from "./types";

const initialState = {
  username: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_USERNAME:
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
}
