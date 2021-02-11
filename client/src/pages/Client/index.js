import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import UserService from "../../services/user.service";
import {
  Navbar,
  OrderCard,
  OrderDetails,
  ClientInfoSection,
  Footer,
} from "../../components";
import { ClientInfo } from "../../Resources/Data/clientinfo";

import {
  Box,
  OrderCardContainer,
  OrdersNav,
  OrderLink,
  OrderCardHeader,
} from "./client.elements";
import { Container } from "../../Resources/Styles/global";
import {
  MdAccessAlarm,
  MdWarning,
  MdImportExport,
  MdCheck,
} from "react-icons/md";
import { Grid } from "@material-ui/core";
// import { Grid } from "@material-ui/core";

export default function Client() {
  const [user, setUser] = useState(undefined);

  const [activeId, setActiveId] = useState(undefined);

  const setActiveIndex = (id) => {
    setActiveId(id);
  };
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

  if (typeof user !== "object") {
    return <Redirect to="/" />;
  }

  return (
    <div
      style={{
        backgroundColor: "#fdfdf8",
      }}
    >
      <Container>
        <Navbar />
        <ClientInfoSection {...ClientInfo} />
      </Container>
      <Box container justify="space-between">
        <Container>
          <Grid container justify="space-between">
            <Grid item>
              <OrderCardContainer>
                <OrderCardHeader>My Trips</OrderCardHeader>
                <OrdersNav>
                  <OrderLink variant="contained" startIcon={<MdAccessAlarm />}>
                    Pending
                  </OrderLink>
                  <OrderLink
                    variant="contained"
                    color="secondary"
                    startIcon={<MdWarning />}
                  >
                    Cancelled
                  </OrderLink>
                  <OrderLink variant="contained" startIcon={<MdImportExport />}>
                    InProgress
                  </OrderLink>
                  <OrderLink
                    variant="contained"
                    color="primary"
                    startIcon={<MdCheck />}
                  >
                    Successfull
                  </OrderLink>
                </OrdersNav>
                {user &&
                  user.orders.map((order) => (
                    <OrderCard
                      order={order}
                      key={order._id}
                      SET_ACTIVE_INDEX={setActiveIndex}
                    />
                  ))}
              </OrderCardContainer>
            </Grid>
            <Grid item>
              {user && (
                <OrderDetails
                  order={
                    user.orders.find((order) => order._id === activeId) ||
                    user.orders[0]
                  }
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
