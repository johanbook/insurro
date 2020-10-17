import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog({ onSubmit }) {
  const [handle, setHandle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(handle);
  };

  return (
    <Dialog open={true} onClose={() => {}} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Choose handle</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This handle will be displayed next messages you send
        </DialogContentText>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            label="Handle"
            fullWidth
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          Enter
        </Button>
      </DialogActions>
    </Dialog>
  );
}
