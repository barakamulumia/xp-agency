import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import destination from "../../resources/images/Destination.svg";
import {
  Navbar,
  XpressRegForm,
  Image,
  OrderDetails,
  Orders,
  Footer,
} from "../../components";

import { DriverAPI, UserAPI, AuthAPI, OrderAPI } from "../../api";

import { Container } from "../../resources/Styles/global";
import { Box } from "./driver.elements";
import { Grid } from "@material-ui/core";

export default function Driver() {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(null);
  const [user, setUser] = useState(undefined);
  const [isVerified, setIsVerified] = useState(false);

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
    const currentUser = AuthAPI.getCurrentUser();

    if (!currentUser) {
      setRedirect("/home");
    }

    UserAPI.getDriverBoard()
      .then((response) => {
        if (response.status === 200) {
          const { userId, role } = response.data;
          setUser({
            userId,
            role,
          });
          setUserReady(true);
          DriverAPI.checkVerification(userId).then((response) => {
            if (response.status === 200) {
              const { id } = response.data;
              setIsVerified(true);
              OrderAPI.getAllOrders(id, role).then((response) => {
                if (response.status === 200) {
                  setOrders(response.data.orders);
                }
              });
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

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div>
      {userReady ? (
        <div>
          <Box>
            <Container>
              <Navbar />
              {isVerified ? (
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
                          ) || filterOrders(orders, filter)[0]
                        }
                        user={user}
                      />
                    )}
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  container
                  spacing={2}
                  justify="center"
                  alignContent="center"
                >
                  <Grid item xs={12} sm={6} md={6}>
                    <XpressRegForm USER_ID={user.userId} />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6}>
                    <Image
                      start="true"
                      alt="my current location"
                      src={destination}
                    />
                  </Grid>
                </Grid>
              )}
            </Container>
          </Box>
          <Footer />
        </div>
      ) : null}
    </div>
  );
}
