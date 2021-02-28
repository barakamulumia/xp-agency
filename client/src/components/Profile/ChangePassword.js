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

export default function ChangePasswordDialog() {
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
        Change Password
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="change-pwd-dialog-slide-title"
        aria-describedby="change-pwd-dialog-slide-description"
      >
        <Paper>
          <DialogTitle id="change-pwd-dialog-slide-title">
            {"Change Password"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="change-pwd-slide-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
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
