import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
/**
 * @todo
 * make bg sticky
 */
import UserService from "../../services/user.service";
import OrderService from "../../services/order.service";

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
  FilterButton,
  OrderCardHeader,
  Notification,
  Message,
} from "./client.elements";
import { Container, LinkButton } from "../../Resources/Styles/global";
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
  const [orders, setOrders] = useState([]);
  const [activeId, setActiveId] = useState(undefined);
  const [filter, setFilter] = useState("in-progress");

  const filterOrders = (orders, filter) =>
    orders.filter((order) => order.status === filter);

  const setActiveIndex = (id) => {
    setActiveId(id);
  };

  useEffect(() => {
    UserService.getClientBoard()
      .then((response) => {
        if (response.status === 200) {
          const { userId, role } = response.data;
          setUser({
            userId,
            role,
          });
          OrderService.getAllOrders(userId, role).then((response) => {
            if (response.status === 200) {
              setOrders(response.data.orders);
            }
          });
        } else {
          setUser(undefined);
          setOrders(undefined);
        }
      })
      .catch((error) => {
        console.log(error);
        setUser(undefined);
        setOrders(undefined);
      });
  }, []);

  // if (typeof user !== "object") {
  //   return <Redirect to="/" />;
  // }

  return (
    <div>
      <Box container justify="space-between">
        <Container>
          <Navbar />
          <ClientInfoSection {...ClientInfo} />
        </Container>
        <Container>
          <Grid container justify="space-between">
            <Grid item>
              <OrderCardContainer>
                <OrderCardHeader>My Trips</OrderCardHeader>
                <OrdersNav>
                  <FilterButton
                    variant="contained"
                    onClick={() => setFilter("pending")}
                    startIcon={<MdAccessAlarm />}
                  >
                    Pending
                  </FilterButton>
                  <FilterButton
                    onClick={() => setFilter("cancelled")}
                    variant="contained"
                    color="secondary"
                    startIcon={<MdWarning />}
                  >
                    Cancelled
                  </FilterButton>
                  <FilterButton
                    onClick={() => setFilter("in-progress")}
                    variant="contained"
                    startIcon={<MdImportExport />}
                  >
                    InProgress
                  </FilterButton>
                  <FilterButton
                    onClick={() => setFilter("successfull")}
                    variant="contained"
                    color="primary"
                    startIcon={<MdCheck />}
                  >
                    Successfull
                  </FilterButton>
                </OrdersNav>
                {orders.length ? (
                  filterOrders(orders, filter).length ? (
                    filterOrders(orders, filter).map((order) => (
                      <OrderCard
                        order={order}
                        key={order._id}
                        SET_ACTIVE_INDEX={setActiveIndex}
                      />
                    ))
                  ) : (
                    <Notification>
                      <Message>No orders in this category</Message>
                      <br />
                      <LinkButton primary="true" to="/client/order-truck">
                        Place Your Order
                      </LinkButton>
                    </Notification>
                  )
                ) : (
                  ""
                )}
              </OrderCardContainer>
            </Grid>
            <Grid item>
              {orders.length && filterOrders(orders, filter).length && (
                <OrderDetails
                  order={
                    filterOrders(orders, filter).find(
                      (order) => order._id === activeId
                    ) || orders[0]
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
