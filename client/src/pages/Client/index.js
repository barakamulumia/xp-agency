import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import { Navbar, OrderCard } from "../../components";
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
// import { Grid } from "@material-ui/core";

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

  console.log(user);

  return (
    <Box>
      <Container>
        <Navbar />
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
              <OrderCard order={order} key={order._id} />
            ))}
        </OrderCardContainer>
      </Container>
    </Box>
  );
}
