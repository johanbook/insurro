const crypto = require("crypto");
const moment = require("moment");
const EVENTS = require("./events");

const sockets = {};
const hasher = crypto.createHash("sha256");
const getHash = (string) => null; //hasher.update(string).digest("hex");

module.exports = (io) => {
  io.on("connection", (socket) => {
    const id = socket.id;
    sockets[id] = { socket };

    socket.on(EVENTS.IDENTIFY, ({ handle }) => {
      console.log("Identiyfing", handle);
      sockets[id].handle = handle;
      socket.broadcast.emit(EVENTS.USER_CONNECT, { handle });
    });

    socket.on(EVENTS.MESSAGE, ({ message }) => {
      const handle = sockets[id].handle;
      if (!handle) return;

      const hash = getHash(message);
      const timestamp = moment().format();
      io.sockets.emit(EVENTS.MESSAGE, {
        user: handle,
        hash: timestamp,
        message,
        timestamp,
      });
    });

    socket.on(EVENTS.USER_IS_TYPING, (args) => {
      socket.broadcast.emit(EVENTS.USER_IS_TYPING, args);
    });

    socket.on("disconnect", () => {
      socket[id] = null;
      const handle = sockets[id].handle;
      socket.broadcast.emit(EVENTS.USER_DISCONNECT, { handle });
    });
  });
};
