import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default function MessageField({ onSendMessage }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        onChange={(e) => setValue(e.target.value)}
        placeholder="Message"
        value={value}
        variant="outlined"
      />
    </form>
  );
}
