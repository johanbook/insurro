import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";

import Theme from "../src/Theme";
import { store } from "../src/store";

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Theme>
        <StaticRouter>
          <Story />
        </StaticRouter>
      </Theme>
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
