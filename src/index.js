import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

import Router from "./Router";
import Theme from "./Theme";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Theme>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Theme>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
