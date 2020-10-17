import React from "react";
import ReactDOM from "react-dom";

import Nav from "./Nav";
import Router from "./Router";
import Theme from "./Theme";

ReactDOM.render(
  <Theme>
    <Nav>
      <Router />
    </Nav>
  </Theme>,
  document.getElementById("root")
);
