import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import { ProfileSection, ProfileSectionHeader } from "./Profile.elements";
import DepositDialog from "./Deposit";
import WithdrawDialog from "./Withdraw";

export default function MobileMoney() {
  return (
    <Fragment>
      <Container maxWidth="sm">
        <ProfileSection>
          <ProfileSectionHeader>Mobile Money</ProfileSectionHeader>
          <p>Balance: $ {45} USD</p>
          <DepositDialog />
          <WithdrawDialog />
        </ProfileSection>
      </Container>
    </Fragment>
  );
}
