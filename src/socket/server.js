const moment = require("moment");
const crypto = require("../utils/crypto");
const EVENTS = require("./events");

const sockets = {};

module.exports = (io) => {
  io.on("connection", (socket) => {
    const id = socket.id;
    sockets[id] = {};

    socket.on(EVENTS.IDENTIFY, ({ username }) => {
      sockets[id].username = username;
      socket.broadcast.emit(EVENTS.USER_CONNECT, { username });
      console.log(username, "registered");
    });

    socket.on(EVENTS.MESSAGE, ({ message }) => {
      const username = sockets[id].username;
      if (!username) return;

      const hash = crypto.hash(username + message);
      const timestamp = moment().format();
      io.sockets.emit(EVENTS.MESSAGE, {
        user: username,
        hash,
        message,
        sessionId: id,
        timestamp,
      });
    });

    socket.on(EVENTS.INIT_SYNC, () => {
      socket.broadcast.emit(EVENTS.SYNC_MESSAGES);
    });

    socket.on(EVENTS.USER_IS_TYPING, (args) => {
      socket.broadcast.emit(EVENTS.USER_IS_TYPING, args);
    });

    socket.on("disconnect", () => {
      const username = sockets[id].username;
      socket.broadcast.emit(EVENTS.USER_DISCONNECT, { username });
      socket[id] = null;
    });
  });
};
