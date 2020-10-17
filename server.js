const express = require("express");
const createServer = require("http").createServer;
const createIO = require("socket.io");

const app = express();
const server = createServer(app);
const io = createIO(server);

const sockets = {};

io.on("connection", (socket) => {
  const id = socket.id;
  sockets[id] = socket;
  console.log(`${id} connected`);

  socket.emit("user-list", [...Object.keys(sockets)]);

  socket.on("message", (message) => {
    Object.values(sockets).forEach((socket) =>
      socket.send({ user: id, message })
    );
  });

  socket.on("disconnect", () => {
    socket[id] = null;
    console.log(`${id} disconnected`);
  });
});

/** Static files. Should be in this order */
app.use(express.static("build"));
app.use(express.static("public")); // needed for config file

/* Serve web page. Wildcard is needed for initial routes */
app.get("/*", (req, res) => res.sendFile(__dirname + "/build/index.html"));

server.listen(process.env.PORT || 8080);
