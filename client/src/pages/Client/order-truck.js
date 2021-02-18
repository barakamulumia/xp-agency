import React, { Fragment } from "react";
import { Footer, Navbar, OrderForm, TruckCard } from "../../components";
import { Box } from "./client.elements";
import { Container } from "../../resources/Styles/global";

import { Grid } from "@material-ui/core";

export default function OrderTruck() {
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
