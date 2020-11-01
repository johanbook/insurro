import socket from "../socket";
import * as actions from "./actions";

export const identify = ({ username }) => (dispatch) => {
  socket.init({ username });
  dispatch(actions.setUsername({ username }));
};
