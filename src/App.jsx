import React, { useState } from "react";
import io from "socket.io-client";

import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Messages from "./Messages";
import MessageField from "./MessageField";
import Nav from "./Nav";

const socket = io();

function Users({ users }) {
  return (
    <React.Fragment>
      <Typography color="primary" gutterBottom variant="h5">
        Users
      </Typography>
      {users.map((user) => (
        <Typography>{user}</Typography>
      ))}
    </React.Fragment>
  );
}

export default function () {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const addMessage = (message) => setMessages([...messages, message]);

  socket.on("user-list", (data) => {
    setUsers(data);
  });

  socket.on("message", (data) => {
    addMessage(data);
  });

  const handleSendMessage = (message) => socket.send(message);

  return (
    <React.Fragment>
      <Nav>
        <Grid container>
          <Collapse in={false}>
            <Grid item xs>
              <Users users={users} />
            </Grid>
          </Collapse>
          <Grid item xs>
            <Messages messages={messages} />
            <MessageField onSendMessage={handleSendMessage} />
          </Grid>
        </Grid>
      </Nav>
    </React.Fragment>
  );
}
