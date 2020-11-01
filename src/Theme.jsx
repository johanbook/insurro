import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/deepPurple";
import blue from "@material-ui/core/colors/lightBlue";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      background: purple[600],
      main: purple[300],
    },
    secondary: {
      main: blue[100],
    },
  },
});

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
