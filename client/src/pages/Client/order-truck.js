import React, { useState, useEffect, Fragment } from "react";
import UserService from "../../services/user.service";
import { Footer, Navbar, OrderForm, TruckCard } from "../../components";
import { Box } from "./client.elements";
import { Container } from "../../Resources/Styles/global";

import { Grid } from "@material-ui/core";

export default function Client() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    UserService.getClientBoard().then(
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

  return (
    <Fragment>
      <Box>
        <Container
          style={{
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <Grid container spacing={2} justify="center" alignContent="center">
            <Grid item xs={12} sm={6} md={6}>
              <OrderForm />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TruckCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Fragment>
  );
}
