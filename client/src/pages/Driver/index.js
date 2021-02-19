import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Grid } from "@material-ui/core";

import { DriverAPI, UserAPI, AuthAPI } from "../../api";
import { useSelector, useDispatch } from "react-redux";
import { selectOrders, activeOrderChanged } from "../../state/orders.slice";

import destination from "../../resources/images/Destination.svg";
import { Container } from "../../resources/styles/global";
import { Box } from "./driver.elements";

import {
  Navbar,
  XpressRegForm,
  Image,
  OrderDetails,
  Orders,
  Footer,
} from "../../components";

export default function Driver() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(null);
  const [user, setUser] = useState(undefined);
  const [isVerified, setIsVerified] = useState(false);

  const setActiveIndex = (id) => {
    dispatch(activeOrderChanged(id));
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
              setIsVerified(true);
            }
          });
        } else {
          setUser(undefined);
        }
      })
      .catch((error) => {
        console.log(error);
        setUser(undefined);
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
                    <Orders setActiveIndex={setActiveIndex} user={user} />
                  </Grid>
                  <Grid item>
                    {orders.length && <OrderDetails user={user} />}
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
