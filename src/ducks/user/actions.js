import types from "./types";

export const setUsername = ({ username }) => ({
  type: types.SET_USERNAME,
  payload: { username },
});
