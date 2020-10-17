import React from "react";

import Typography from "@material-ui/core/Typography";

export default function Users({ users }) {
  return (
    <React.Fragment>
      <Typography color="primary" gutterBottom variant="h5">
        Active users
      </Typography>
      {users.map((user) => (
        <Typography>{user}</Typography>
      ))}
    </React.Fragment>
  );
}
