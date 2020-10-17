import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(1),
  },
  message: {
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
  },
}));

function Message({ message, timestamp, user }) {
  const classes = useStyles();
  return (
    <Typography component="div" style={{ display: "flex", width: "100%" }}>
      <Typography color="textSecondary" component="span">
        {user}
      </Typography>
      {": "}
      <span className={classes.message}>{message}</span>
      <Typography color="textSecondary" component="span" variant="body2">
        {timestamp}
      </Typography>
    </Typography>
  );
}

export default function Messages({ messages }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography color="primary" gutterBottom variant="h5">
        Messages
      </Typography>
      {messages.map((message) => (
        <Message {...message} />
      ))}
      {messages.length === 0 && (
        <Typography color="textSecondary">
          No messages sent yet. Be the first to send!
        </Typography>
      )}
    </div>
  );
}
