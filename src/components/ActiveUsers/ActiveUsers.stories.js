import React from "react";

import ActiveUsers from "./ActiveUsers";

const users = ["Meme"];

export default {
  component: ActiveUsers,
  title: "ActiveUsers",
};

export const Empty = () => <ActiveUsers users={[]} />;
export const Several = () => <ActiveUsers users={users} />;
