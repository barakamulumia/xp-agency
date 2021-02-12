import React, { useEffect, useState } from "react";
import DriverService from "../../services/driver.service";

import {
  OrderDetailsContainer,
  OrderDetailsHeader,
  OrderColumn,
  OrderItem,
  OrderValue,
} from "./OrderDetails.elements";

const OrderDetails = ({ order }) => {
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    DriverService.getDriverById(order.driverId)
      .then((res) => {
        setDriver(res.data);
      })
      .catch((err) => {
        setDriver(null);
      });
  }, [order.driverId]);

  return (
    <OrderDetailsContainer>
      <OrderDetailsHeader>Xpress Kenya</OrderDetailsHeader>
      <OrderColumn>
        <OrderItem>Order No:</OrderItem>
        <OrderValue>{order._id.slice(0, 8)}</OrderValue>
      </OrderColumn>
      <OrderColumn>
        <OrderItem>Pick Up: </OrderItem>
        <OrderValue>{order.pickup.address}</OrderValue>
      </OrderColumn>
      <OrderColumn>
        <OrderItem> Destination: </OrderItem>
        <OrderValue>{order.destination.address}</OrderValue>
      </OrderColumn>
      <OrderColumn>
        <OrderItem>Charges: </OrderItem>
        <OrderValue>{order.charges}</OrderValue>
      </OrderColumn>
      {driver && (
        <OrderColumn>
          <OrderItem>Driver</OrderItem>
          <OrderValue>
            {driver.firstname} - {driver.truckno}
          </OrderValue>
        </OrderColumn>
      )}
      <OrderColumn>
        <OrderItem>Date: </OrderItem>
        <OrderValue>{new Date(order.dateTime).toLocaleString()}</OrderValue>
      </OrderColumn>
      <OrderColumn>
        <OrderItem>Status: </OrderItem>
        <OrderValue>{order.status}</OrderValue>
      </OrderColumn>
    </OrderDetailsContainer>
  );
};

export default OrderDetails;
