import EVENTS from "../../socket/events";

export default function (state = [], action) {
  const username = action?.payload?.username;
  if (!username) return state;
  switch (action.type) {
    case EVENTS.USER_CONNECT:
      return [...state, action.payload.username];
    case EVENTS.USER_DISCONNECT:
      return state.filter((user) => user !== username);
    default:
      return state;
  }
}
