import EVENTS from "../../socket/events";

export default function (state = [], action) {
  const username = action?.payload?.username;
  switch (action.type) {
    case EVENTS.LIST_ACTIVE_USERS:
      return action.payload.users;
    case EVENTS.USER_CONNECT:
      if (!username) return state;
      return [...state, action.payload.username];
    case EVENTS.USER_DISCONNECT:
      if (!username) return state;
      return state.filter((user) => user !== username);
    default:
      return state;
  }
}
