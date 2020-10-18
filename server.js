const express = require("express");
const createServer = require("http").createServer;
const createIO = require("socket.io");
const moment = require("moment");

const setupIO = require("./src/socket/server");

const app = express();
const server = createServer(app);
const io = createIO(server);
setupIO(io);

/** Static files. Should be in this order */
app.use(express.static("build"));
app.use(express.static("public")); // needed for config file

/* Serve web page. Wildcard is needed for initial routes */
app.get("/*", (req, res) => res.sendFile(__dirname + "/build/index.html"));

server.listen(process.env.PORT || 8080);
