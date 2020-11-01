import React, { useEffect, useRef, useState } from "react";
import moment from "moment";

import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import Avatar from "../Avatar";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(1),
    height: "80vh",
    overflowY: "auto",
  },
  message: {
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
  },
}));

function Message({
  hash,
  message,
  shown,
  sessionId,
  setShown,
  timestamp,
  user,
}) {
  const selected = shown === hash;
  const usernameClick = () => {
    setShown(selected ? null : hash);
  };
  const secondary = (
    <React.Fragment>
      <Typography color="textSecondary" gutterBottom>
        {message}
      </Typography>

      <Collapse in={selected}>
        <Typography color="textSecondary" variant="body2">
          Time: {moment(timestamp).format("H:mm")} Hash: {hash} Session ID:{" "}
          {sessionId}
        </Typography>
      </Collapse>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ListItem button divider onClick={usernameClick} selected={selected}>
        <ListItemIcon>
          <Avatar string={user} />
        </ListItemIcon>
        <ListItemText primary={user} secondary={secondary} />
      </ListItem>
    </React.Fragment>
  );
}

export default function Messages({ messages, typer }) {
  const bottom = useRef();
  const classes = useStyles();
  const [expanded, setExpanded] = useState();

  const scrollToBottom = (behavior = "auto") =>
    bottom.current.scrollIntoView({ behavior });

  useEffect(() => scrollToBottom(), []);

  return (
    <div className={classes.container}>
      <Typography color="primary" gutterBottom variant="h5">
        Messages
      </Typography>
      <List>
        {messages.map((message) => (
          <Message shown={expanded} setShown={setExpanded} {...message} />
        ))}
        {messages.length === 0 && (
          <Typography color="textSecondary">
            No messages sent yet. Be the first to send!
          </Typography>
        )}
        {typer && (
          <Typography color="textSecondary">{typer} is typing...</Typography>
        )}
        <div ref={bottom} />
      </List>
    </div>
  );
}
