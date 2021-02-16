import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { UserService, OrderService, AuthService } from "../../services";
import { ClientInfo } from "../../Resources/Data/clientinfo";
import { Box } from "./client.elements";
import { Container } from "../../Resources/Styles/global";
import { Grid } from "@material-ui/core";

import {
  Navbar,
  OrderDetails,
  ClientInfoSection,
  Footer,
  Orders,
} from "../../components";

export default function Client() {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(null);

  const [user, setUser] = useState(undefined);

  const [orders, setOrders] = useState([]);
  const [activeId, setActiveId] = useState(undefined);
  const [filter, setFilter] = useState("in-progress");

  const handleFilterChange = (currentFilter) => {
    setFilter(currentFilter);
  };

  const filterOrders = (orders, filter) =>
    orders.filter((order) => order.status === filter);

  const setActiveIndex = (id) => {
    setActiveId(id);
  };

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) {
      setRedirect("/home");
    }

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
          setUserReady(true);
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

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div>
      {userReady ? (
        <div>
          <Box container justify="space-between">
            <Container>
              <Navbar />
              <ClientInfoSection {...ClientInfo} />
            </Container>
            <Container>
              <Grid container justify="space-between">
                <Grid item>
                  <Orders
                    orders={filterOrders(orders, filter)}
                    setActiveIndex={setActiveIndex}
                    filter={filter}
                    handleFilterChange={handleFilterChange}
                  />
                </Grid>
                <Grid item>
                  {orders.length && filterOrders(orders, filter).length && (
                    <OrderDetails
                      order={
                        filterOrders(orders, filter).find(
                          (order) => order._id === activeId
                        ) || orders[0]
                      }
                      user={user}
                    />
                  )}
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Footer />
        </div>
      ) : null}
    </div>
  );
}
