import React from "react";

import Home from "./Home";

export default {
  component: Home,
  title: "Home",
};

export const Default = () => <Home username="Olga" />;
export const NoUsername = () => <Home />;
