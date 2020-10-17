import React, { useState } from "react";
import io from "socket.io-client";

import Dialog from "./Dialog";
import Messages from "./Messages";
import MessageField from "./MessageField";
import Users from "./Users";

import * as cookies from "./utils/cookies";

const socket = io();

function App({ handle }) {
  const [typer, setTyper] = useState();
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const addMessage = (message) => setMessages([...messages, message]);

  socket.on("user-list", (data) => {
    setUsers(data);
  });

  socket.on("chat", (data) => {
    addMessage(data);
  });

  socket.on("typing", ({ handle }) => {
    setTyper(handle);
  });

  const handleSendMessage = (message) =>
    socket.emit("chat", { handle, message });

  const handleTyping = () => socket.emit("typing", { handle });

  return (
    <React.Fragment>
      <Messages messages={messages} typer={typer} />
      <MessageField onSendMessage={handleSendMessage} onTyping={handleTyping} />
    </React.Fragment>
  );
}

export default function () {
  const [handle, setHandle] = useState(cookies.get("handle"));
  const handleSubmit = (handle) => {
    cookies.set("handle", handle, 20);
    setHandle(handle);
  };
  if (!handle) {
    return <Dialog onSubmit={handleSubmit} />;
  }
  return <App handle={handle} />;
}
