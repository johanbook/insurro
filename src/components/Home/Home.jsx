import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Canvas from "@johanbook/react-canvas";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "85vh",
    padding: theme.spacing(32),
  },
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
  },
  textFieldSection: {
    padding: theme.spacing(2),
  },
}));

export function createItems(number) {
  const items = [];
  for (let i = 0; i < number; i++)
    for (let j = 0; j < number; j++) {
      items.push({ x: i / number, y: j / number });
    }

  return items;
}

const handleUpdateItem = (item, t) => {
  const time = 25 * t;
  const diff = 10 * (item.x + item.y);
  item.size = 1 + 2 * Math.sin(time + diff);
};

const items = createItems(20);

function CanvasContainer({ children }) {
  return (
    <Canvas div items={items} onUpdateItem={handleUpdateItem}>
      {children}
    </Canvas>
  );
}

export default function Home({ onLaunch, username }) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  return (
    <CanvasContainer>
      <Container className={classes.container} fixed>
        <div className={classes.content}>
          <center>
            <Typography gutterBottom variant="h4">
              Insurro
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Insurro is Chat-app enabling to talk to your friends. Simple as
              that.
            </Typography>

            {!username && (
              <div className={classes.textFieldSection}>
                <Typography color="textSecondary" gutterBottom>
                  To start chatting, use a username and click Launch!
                </Typography>

                <TextField
                  label="Username"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  variant="outlined"
                />
              </div>
            )}

            <Button
              color="primary"
              disabled={!value}
              onClick={onLaunch}
              variant="outlined"
            >
              Launch
            </Button>
          </center>
        </div>
      </Container>
    </CanvasContainer>
  );
}
