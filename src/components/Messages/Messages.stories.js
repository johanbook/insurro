import React from "react";
import moment from "moment";

import Messages from "./Messages";

const messages = [];
for (let i = 0; i < 100; i++)
  messages.push({
    hash: i,
    user: "Handle",
    message: "Lorem ipsuim",
    timestamp: moment().format(),
  });

export default {
  component: Messages,
  title: "Messages",
};

export const Default = () => <Messages messages={[]} />;
export const ManyMessages = () => <Messages messages={messages} />;
