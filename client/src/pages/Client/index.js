import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import { Navbar, OrderForm, Image } from "../../components";
import my_current_location from "../../images/my_current_location.svg";
import { Container } from "../../Resources/Styles/global";

import { Grid } from "@material-ui/core";

export default function Client() {
  const [content, setContent] = useState(undefined);

  useEffect(() => {
    UserService.getClientBoard().then(
      (response) => {
        setContent(response.data.content);
      },
      (error) => {
        setContent(
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
    <Container>
      <Navbar />
      <Grid container spacing={2} justify="center" alignContent="center">
        <Grid item xs={12} sm={6} md={6}>
          <OrderForm />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Image
            start="true"
            alt="my current location"
            src={my_current_location}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
