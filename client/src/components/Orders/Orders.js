import React, { useEffect, Fragment } from "react";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  selectOrders,
  fetchOrders,
  ordersFilterChanged,
} from "../../state/orders.slice";

import { LinkButton } from "../../resources/Styles/global";
import OrderCard from "../OrderCard/OrderCard";

import {
  MdAccessAlarm,
  MdWarning,
  MdImportExport,
  MdCheck,
} from "react-icons/md";

import {
  OrderCardContainer,
  OrderCardHeader,
  OrdersNav,
  FilterButton,
  Notification,
  Message,
} from "./Orders.elements";

const Orders = ({ setActiveIndex, user }) => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const order_status = useSelector((state) => state.orders.status);
  const error = useSelector((state) => state.orders.error);

  const handleFilterChange = (filter) => dispatch(ordersFilterChanged(filter));

  useEffect(() => {
    if (order_status === "idle") {
      dispatch(fetchOrders());
    }
  }, [dispatch, order_status]);

  let content;

  if (order_status === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (order_status === "succeeded") {
    content = (
      <Fragment>
        {orders.length ? (
          orders.map((order) => (
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
            {user.role === "client" && (
              <LinkButton primary="true" to="/client/order-truck">
                Place Your Order
              </LinkButton>
            )}
          </Notification>
        )}
      </Fragment>
    );
  } else if (order_status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <Grid item>
        <OrderCardContainer>
          <OrderCardHeader>My Trips</OrderCardHeader>
          <OrdersNav>
            <FilterButton
              variant="contained"
              onClick={() => handleFilterChange("pending")}
              startIcon={<MdAccessAlarm />}
            >
              Pending
            </FilterButton>
            <FilterButton
              onClick={() => handleFilterChange("cancelled")}
              variant="contained"
              color="secondary"
              startIcon={<MdWarning />}
            >
              Cancelled
            </FilterButton>
            <FilterButton
              onClick={() => handleFilterChange("in-progress")}
              variant="contained"
              startIcon={<MdImportExport />}
            >
              InProgress
            </FilterButton>
            <FilterButton
              onClick={() => handleFilterChange("successfull")}
              variant="contained"
              color="primary"
              startIcon={<MdCheck />}
            >
              Successfull
            </FilterButton>
          </OrdersNav>
          {content}
        </OrderCardContainer>
      </Grid>
    </div>
  );
};

export default Orders;
