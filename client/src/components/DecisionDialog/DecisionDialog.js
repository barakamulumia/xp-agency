import {
  Slide,
  Dialog,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";

import {
  DialogBoxTitle,
  DialogContentBox,
  DialogMedia,
  DialogContentItem,
  DialogContainer,
} from "./DecisionDialog.element";

import { LinkButton, Button } from "../../Resources/Styles/global";

import React, { forwardRef, useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DecisionDialog = ({
  btnText,
  actionText,
  primary,
  secondary,
  small,
  big,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const toRoute = (txt) => txt.split(" ").join("-").toLowerCase();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        primary={primary}
        secondary={secondary}
        big={big}
        small={small}
      >
        {btnText}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="dialog-slide-title"
      >
        <DialogBoxTitle id="dialog-slide-title">
          {"Elevate your freight transit expirience "}
        </DialogBoxTitle>
        <DialogContainer>
          <DialogContentItem>
            <DialogMedia src="https://i.postimg.cc/DZqKmp8k/highway-truck.jpg" />
            <DialogContentBox>
              <DialogContentText>
                Get paid to sit behind the wheel
              </DialogContentText>
            </DialogContentBox>
            <DialogActions>
              <LinkButton
                onClick={handleClose}
                to={`driver/${toRoute(actionText)}`}
              >
                {actionText} to Drive
              </LinkButton>
            </DialogActions>
          </DialogContentItem>
          <DialogContentItem>
            <DialogMedia src="https://i.postimg.cc/4yDjR3G8/packing-boxes.jpg" />
            <DialogContentBox>
              <DialogContentText>Ship with XpressKenya</DialogContentText>
            </DialogContentBox>
            <DialogActions>
              <LinkButton
                secondary="true"
                onClick={handleClose}
                to={`/client/${toRoute(actionText)}`}
              >
                {actionText} to Ship
              </LinkButton>
            </DialogActions>
          </DialogContentItem>
        </DialogContainer>
      </Dialog>
    </div>
  );
};

export default DecisionDialog;
