import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";

export default function () {
  return (
    <Router>
      <Switch>
        <Route component={App} path="/:room" />
        <Route component={Home} path="/" />
      </Switch>
    </Router>
  );
}
