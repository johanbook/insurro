const express = require("express");
const createServer = require("http").createServer;
const createIO = require("socket.io");
const moment = require("moment");

const app = express();
const server = createServer(app);
const io = createIO(server);

const sockets = {};

const forEachUser = (fn) =>
  Object.values(sockets).forEach((socket) => fn(socket));
const sendUserLists = () => {
  const users = [...Object.keys(sockets)];
  forEachUser((socket) => socket.emit("user-list", users));
};

io.on("connection", (socket) => {
  const id = socket.id;
  sockets[id] = socket;
  sendUserLists();

  socket.on("message", (message) => {
    const timestamp = moment().format("h:mm:ss");
    forEachUser((socket) => socket.send({ user: id, message, timestamp }));
  });

  socket.on("disconnect", () => {
    socket[id] = null;
    sendUserLists();
  });
});

/** Static files. Should be in this order */
app.use(express.static("build"));
app.use(express.static("public")); // needed for config file

/* Serve web page. Wildcard is needed for initial routes */
app.get("/*", (req, res) => res.sendFile(__dirname + "/build/index.html"));

server.listen(process.env.PORT || 8080);
