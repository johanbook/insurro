const moment = require("moment");
const crypto = require("../utils/crypto");
const EVENTS = require("./events");

const sockets = {};

module.exports = (io) => {
  io.on("connection", (socket) => {
    const id = socket.id;
    sockets[id] = {};

    socket.on(EVENTS.IDENTIFY, ({ handle }) => {
      sockets[id].handle = handle;
      socket.broadcast.emit(EVENTS.USER_CONNECT, { handle });
    });

    socket.on(EVENTS.MESSAGE, ({ message }) => {
      const handle = sockets[id].handle;
      if (!handle) return;

      const hash = crypto.hash(handle + message);
      const timestamp = moment().format();
      io.sockets.emit(EVENTS.MESSAGE, {
        user: handle,
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
      const handle = sockets[id].handle;
      socket.broadcast.emit(EVENTS.USER_DISCONNECT, { handle });
      socket[id] = null;
    });
  });
};
