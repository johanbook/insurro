import React, { useState } from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import SendIcon from "@material-ui/icons/Send";

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
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SendIcon color="primary" />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Message"
        value={value}
        variant="outlined"
      />
    </form>
  );
}
