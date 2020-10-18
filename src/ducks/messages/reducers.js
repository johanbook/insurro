import EVENTS from "../../socket/events";

export default function (state = [], action) {
  switch (action.type) {
    case EVENTS.MESSAGE:
      return [...state, action.payload];
    case "SET_MESSAGES":
      return action.payload.messages;
    default:
      return state;
  }
}
