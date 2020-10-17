import React, { useState } from "react";
import io from "socket.io-client";

import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Messages from "./Messages";
import MessageField from "./MessageField";
import Nav from "./Nav";
import Users from "./Users";

const socket = io();

export default function App() {
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
    <Nav>
      <div style={{ display: "flex" }}>
        <Collapse in={false}>
          <Users users={users} />
        </Collapse>
        <div style={{ flexGrow: 1 }}>
          <Messages messages={messages} />
          <MessageField onSendMessage={handleSendMessage} />
        </div>
      </div>
    </Nav>
  );
}
