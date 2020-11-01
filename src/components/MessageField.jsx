import React, { useState } from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import SendIcon from "@material-ui/icons/Send";

export default function MessageField({ onSendMessage, onTyping }) {
  const [value, setValue] = useState("");
  const [typing, setTyping] = useState(false);
  const usernameKeydown = () => {
    if(typing) return;
    onTyping();
    setTyping(true);
  };
  const usernameSubmit = (e) => {
    e.preventDefault();
    onSendMessage(value);
    setValue("");
    setTyping(false);
  };
  return (
    <form onSubmit={usernameSubmit}>
      <TextField
        autoFocus
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SendIcon color="primary" />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={usernameKeydown}
        placeholder="Message"
        value={value}
        variant="outlined"
      />
    </form>
  );
}
