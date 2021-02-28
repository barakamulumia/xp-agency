import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Navbar, PersonalDetails, MobileMoney } from "../../components";
import { AuthAPI } from "../../api";
import { Button, ImageBgContainer } from "../../resources/styles/global";
import { Container, Grid } from "@material-ui/core";

import {
  GreetingLine,
  ProfileSection,
  ProfileSectionHeader,
  Transaction,
  TransactionType,
  TransactionAmount,
} from "./profile.elements";

export default function Profile() {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(null);
  const [currentUser, setCurrentUser] = useState({ username: "" });

  useEffect(() => {
    const currentUser = AuthAPI.getCurrentUser();

    if (!currentUser) {
      setRedirect("/home");
    }
    setCurrentUser(currentUser);
    setUserReady(true);
  }, []);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div className="container">
      {userReady ? (
        <ImageBgContainer>
          <Navbar />
          <GreetingLine>
            Greetings&nbsp;&nbsp;{currentUser.firstname}
          </GreetingLine>
          <Grid container spacing={2} justify="space-between">
            <PersonalDetails currentUser={currentUser} />
            <Grid item md={5} sm={8} xs={12}>
              <ProfileSection>
                <ProfileSectionHeader>Transacations</ProfileSectionHeader>
                <Transaction>
                  <TransactionType>Xpress Payment</TransactionType>
                  <TransactionAmount>Ksh: 3000</TransactionAmount>
                </Transaction>
                <Transaction>
                  <TransactionType>Xpress Payment</TransactionType>
                  <TransactionAmount>Ksh: 3000</TransactionAmount>
                </Transaction>
                <Transaction>
                  <TransactionType>customer deposit</TransactionType>
                  <TransactionAmount>Ksh: 30,000</TransactionAmount>
                </Transaction>
              </ProfileSection>
            </Grid>
          </Grid>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              padding: "10px",
            }}
          >
            <MobileMoney />
          </div>
        </ImageBgContainer>
      ) : null}
    </div>
  );
}
