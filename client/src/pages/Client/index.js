import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { UserAPI, AuthAPI } from "../../api";
import { activeOrderChanged, selectOrders } from "../../state/orders.slice";
import { Container } from "../../resources/styles/global";
import { ClientInfo } from "../../resources/data/clientinfo";
import { Box } from "./client.elements";

import {
  Navbar,
  OrderDetails,
  ClientInfoSection,
  Footer,
  Orders,
} from "../../components";

export default function Client() {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(null);
  const [user, setUser] = useState(undefined);

  const setActiveIndex = (id) => {
    dispatch(activeOrderChanged(id));
  };

  useEffect(() => {
    const currentUser = AuthAPI.getCurrentUser();

    if (!currentUser) {
      setRedirect("/home");
    }

    UserAPI.getClientBoard()
      .then((response) => {
        if (response.status === 200) {
          const { userId, role } = response.data;
          setUser({
            userId,
            role,
          });
          setUserReady(true);
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
          <Box container justify="space-between">
            <Container>
              <Navbar />
              <ClientInfoSection {...ClientInfo} />
            </Container>
            <Container>
              <Grid container justify="space-between">
                <Grid item>
                  <Orders setActiveIndex={setActiveIndex} user={user} />
                </Grid>
                <Grid item>
                  {orders.length && <OrderDetails user={user} />}
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
