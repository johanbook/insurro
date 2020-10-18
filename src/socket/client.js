import io from "socket.io-client";
import { store } from "../store";
import EVENTS from "./events";

export default class Connection {
  constructor() {
    this.socket = io();
  }

  init({handle}) {
    this.handle = handle;
    this.socket.emit(EVENTS.IDENTIFY, { handle });

    Object.values(EVENTS).forEach((EVENT) =>
      this.socket.on(EVENT, (payload) =>
        store.dispatch({ type: EVENT, payload })
      )
    );
  }

  indicateTyping(isTyping) {
    this.socket.emit(EVENTS.USER_IS_TYPING, { isTyping });
  }

  sendMessage(message) {
    this.socket.emit(EVENTS.MESSAGE, { message });
  }
}
