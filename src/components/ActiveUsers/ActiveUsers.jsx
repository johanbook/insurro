import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  listIcon: {
    marginRight: theme.spacing(2),
    color: "green",
  },
}));

export default function Users({ users }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography color="primary" variant="h5">
        Active users
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user}>
            <ListItemText
              primary={
                <React.Fragment>
                  <FontAwesomeIcon
                    className={classes.listIcon}
                    icon={faCircle}
                  />

                  {user}
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
