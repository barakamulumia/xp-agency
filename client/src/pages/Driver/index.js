import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";

import destination from "../../images/Destination.svg";
import { Navbar, XpressRegForm, Image } from "../../components";
import UserService from "../../services/user.service";
import { Container } from "../../Resources/Styles/global";
import { Box } from "./driver.elements";
import { Grid } from "@material-ui/core";

export default function Driver() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    UserService.getDriverBoard().then(
      (response) => {
        setUser(response.data);
      },
      (error) => {
        setUser(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        );
      }
    );
  }, []);

  // if (!user) {
  //   return <Redirect to="/" />;
  // }

  return (
    <Box>
      <Container>
        <Navbar />
        <Grid container spacing={2} justify="center" alignContent="center">
          {user && typeof user === "object" && (
            <Grid item xs={12} sm={6} md={6}>
              <XpressRegForm USER_ID={user.userId} />
            </Grid>
          )}
          <Grid item xs={12} sm={6} md={6}>
            <Image start="true" alt="my current location" src={destination} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
