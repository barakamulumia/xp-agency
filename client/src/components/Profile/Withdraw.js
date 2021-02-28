import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Slide,
} from "@material-ui/core";
import { Button } from "../../resources/styles/global";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WithdrawDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button fullWidth onClick={handleClickOpen}>
        Withdraw Funds
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="withdraw-dialog-slide-title"
        aria-describedby="withdraw-dialog-slide-description"
      >
        <Paper>
          <DialogTitle id="withdraw-dialog-slide-title">
            {"withdraw"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="withdraw-slide-description">
              How Much yah wanna withdraw
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions>
        </Paper>
      </Dialog>
    </div>
  );
}
