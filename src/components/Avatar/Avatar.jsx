import React from "react";

import MuiAvatar from "@material-ui/core/Avatar";

import crypto from "../../utils/crypto";

export default function Avatar({ string }) {
  const color1 = crypto.hashcolor(string);
  return <MuiAvatar style={{ backgroundColor: color1 }}>{string[0]}</MuiAvatar>;
}
