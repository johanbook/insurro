import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import Messages from "./components/Messages";
import MessageField from "./components/MessageField";
import ActiveUsers from "./components/ActiveUsers";

import { messageOperations, messageSelectors } from "./ducks/messages";
import { userSelectors } from "./ducks/user";
import { usersSelectors } from "./ducks/users";

const useStyles = makeStyles((theme) => ({
  userList: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    paddingLeft: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  const messages = useSelector(messageSelectors.messages);
  const users = useSelector(usersSelectors.users);
  const typer = null;

  const handleSendMessage = (args) => messageOperations.sendMessage(args);
  const handleTyping = (args) => args;

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={10} md={10}>
          <Messages messages={messages} typer={typer} />
          <MessageField
            onSendMessage={handleSendMessage}
            onTyping={handleTyping}
          />
        </Grid>
        <Hidden xsDown sm={2} md={2}>
          <Grid className={classes.userList} item xs>
            <ActiveUsers users={users} />
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
