import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelectors } from "./ducks/user";

import App from "./App";
import Home from "./components/Home";

export default function () {
  const username = useSelector(userSelectors.username);
  if (!username) return <Home />;
  return (
    <Router>
      <Switch>
        <Route component={App} path="/:room" />
        <Route component={Home} path="/" />
      </Switch>
    </Router>
  );
}
