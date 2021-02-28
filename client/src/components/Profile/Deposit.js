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

export default function DepositDialog() {
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
        Deposit Funds
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="deposit-dialog-slide-title"
        aria-describedby="deposit-dialog-slide-description"
      >
        <Paper>
          <DialogTitle id="deposit-dialog-slide-title">
            {"Deposit Funds"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="deposit-slide-description">
              How much yah waana deposit
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
