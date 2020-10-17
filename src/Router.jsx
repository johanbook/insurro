import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";

export default function () {
  return (
    <Router>
      <Switch>
        <Route component={App} path="/:room" />
        <Route component={App} path="/" />
      </Switch>
    </Router>
  );
}
