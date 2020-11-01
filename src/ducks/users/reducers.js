import EVENTS from "../../socket/events";

export default function (state = [], action) {
  switch (action.type) {
    case EVENTS.USER_CONNECT:
      return [...state, action.payload];
    case EVENTS.USER_DISCONNECT:
      return [...state, action.payload];
    default:
      return state;
  }
}
