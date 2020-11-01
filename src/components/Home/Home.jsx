import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Canvas from "@johanbook/react-canvas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import { userOperations, userSelectors } from "../../ducks/user";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
  },
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

const usernameUpdateItem = (item, t) => {
  const time = 4 * t;
  const diff1 = 10 * (item.x + item.y);
  const diff2 = 10 * (item.x - item.y);
  const sum1 = time + diff1;
  const sum2 = time + diff2;
  const size =
    4 * Math.sin(sum1) + 4 * Math.cos(2 * sum2) + 4 * Math.sin(4 * sum2);
  item.size = Math.max(0, size);
};

const items = createItems(10);

function CanvasContainer({ children }) {
  const theme = useTheme();
  return (
    <Canvas
      items={items}
      onUpdateItem={usernameUpdateItem}
      renderOptions={{
        defaultColor: theme.palette.primary.main,
        fps: 10,
      }}
    >
      {children}
    </Canvas>
  );
}

export function Home({ onLaunch, username }) {
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
              className={classes.button}
              color="primary"
              disabled={!username && !value}
              endIcon={<FontAwesomeIcon icon={faRocket} />}
              onClick={() => onLaunch(value)}
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

export default function HomeContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector(userSelectors.username);

  const handleLaunch = (value) => {
    dispatch(userOperations.identify({ username: username || value }));
    history.push("/public");
  };

  return <Home onLaunch={handleLaunch} username={username} />;
}
