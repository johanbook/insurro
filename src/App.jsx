import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Dialog from "./components/Dialog";
import Messages from "./components/Messages";
import MessageField from "./components/MessageField";
import Users from "./components/Users";

import { messageOperations, messageSelectors } from "./ducks/messages";
import { userOperations, userSelectors } from "./ducks/user";

import * as cookies from "./utils/cookies";

function App({ handle }) {
  const messages = useSelector(messageSelectors.messages);

  const [typer, setTyper] = useState();
  const [users, setUsers] = useState([]);

  const handleSendMessage = (args) => messageOperations.sendMessage(args);
  const handleTyping = (args) => args;

  return (
    <React.Fragment>
      <Messages messages={messages} typer={typer} />
      <MessageField onSendMessage={handleSendMessage} onTyping={handleTyping} />
    </React.Fragment>
  );
}

export default function () {
  const handleR = useSelector(userSelectors.handle);
  const [handle, setHandle] = useState(cookies.get("handle"));
  const handleSubmit = (handle) => {
    cookies.set("handle", handle, 20);
    setHandle(handle);
  };
  useEffect(() => {
    userOperations.identify({ handle });
  }, [handle]);
  if (!handle) {
    return <Dialog onSubmit={handleSubmit} />;
  }
  return <App handle={handle} />;
}
