import React from "react";

import Typography from "@material-ui/core/Typography";

function Message({ message, user }) {
  return (
    <Typography>
      <Typography color="textSecondary" component="span" variant="body2">
        {user}
      </Typography>
      {": "}
      {message}
    </Typography>
  );
}

export default function Messages({ messages }) {
  return (
    <React.Fragment>
      <Typography color="primary" gutterBottom variant="h5">
        Messages
      </Typography>
      {messages.map((message) => (
        <Message {...message} />
      ))}
      {messages.length === 0 && (
        <Typography color="textSecondary" gutterBottom>
          No messages sent yet. Be the first to send!
        </Typography>
      )}
    </React.Fragment>
  );
}
