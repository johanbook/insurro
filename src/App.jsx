import React from "react";
import { useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import Messages from "./components/Messages";
import MessageField from "./components/MessageField";
import ActiveUsers from "./components/ActiveUsers";

import { messageOperations, messageSelectors } from "./ducks/messages";
import { userSelectors } from "./ducks/user";
import { usersSelectors } from "./ducks/users";

function App({ username }) {
  const messages = useSelector(messageSelectors.messages);
  const users = useSelector(usersSelectors.users);
  const typer = null;

  const handleSendMessage = (args) => messageOperations.sendMessage(args);
  const handleTyping = (args) => args;

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={10} md={10}>
          <Messages messages={messages} typer={typer} />
          <MessageField
            onSendMessage={handleSendMessage}
            onTyping={handleTyping}
          />
        </Grid>
        <Hidden xsDown sm={2} md={2}>
          <Grid item xs>
            <ActiveUsers users={[username, ...users]} />
          </Grid>
        </Hidden>
      </Grid>
    </React.Fragment>
  );
}

export default function () {
  const username = useSelector(userSelectors.username);
  return <App username={username} />;
}
