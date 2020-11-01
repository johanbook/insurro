import io from "socket.io-client";
import { store } from "../store";
import EVENTS from "./events";

export default class Connection {
  constructor() {
    this.socket = io();
  }

  init({ username }) {
    this.username = username;

    Object.values(EVENTS).forEach((EVENT) =>
      this.socket.on(EVENT, (payload) => {
        console.log("Recieved", EVENT, { payload });
        store.dispatch({ type: EVENT, payload });
      })
    );

    this.socket.emit(EVENTS.IDENTIFY, { username });
    this.socket.emit(EVENTS.INIT_SYNC);
  }

  indicateTyping(isTyping) {
    this.socket.emit(EVENTS.USER_IS_TYPING, { isTyping });
  }

  sendMessage(message) {
    this.socket.emit(EVENTS.MESSAGE, { message });
  }
}
