import React, { useState } from "react";
import { useSelector } from "react-redux";

import Messages from "./components/Messages";
import MessageField from "./components/MessageField";
import Users from "./components/Users";

import { messageOperations, messageSelectors } from "./ducks/messages";
import { userSelectors } from "./ducks/user";

function App({ username }) {
  const messages = useSelector(messageSelectors.messages);

  const [typer, setTyper] = useState();
  const [users, setUsers] = useState([]);

  const usernameSendMessage = (args) => messageOperations.sendMessage(args);
  const usernameTyping = (args) => args;

  return (
    <React.Fragment>
      <Messages messages={messages} typer={typer} />
      <MessageField
        onSendMessage={usernameSendMessage}
        onTyping={usernameTyping}
      />
    </React.Fragment>
  );
}

export default function () {
  const username = useSelector(userSelectors.username);
  return <App username={username} />;
}
