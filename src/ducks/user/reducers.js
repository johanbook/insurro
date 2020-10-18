import types from "./types";

const initialState = {
  handle: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_HANDLE:
      return { ...state, handle: action.payload.handle };
    default:
      return state;
  }
}
