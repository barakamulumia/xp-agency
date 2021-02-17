import React from "react";
import { Grid } from "@material-ui/core";
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

const Orders = ({ orders, setActiveIndex, handleFilterChange }) => {
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
              <LinkButton primary="true" to="/client/order-truck">
                Place Your Order
              </LinkButton>
            </Notification>
          )}
        </OrderCardContainer>
      </Grid>
    </div>
  );
};

export default Orders;
