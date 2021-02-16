import React, { useEffect, useState } from "react";
import { DriverService, ClientService } from "../../services";
import { Button } from "../../Resources/Styles/global";

import {
  OrderDetailsContainer,
  OrderDetailsHeader,
  OrderColumn,
  OrderItem,
  OrderValue,
} from "./OrderDetails.elements";

const OrderDetails = ({ order, user }) => {
  const [driver, setDriver] = useState(null);
  const [client, setClient] = useState(null);

  // const handleOrderCancel = (orderId) => {
  //   OrderService.cancelOrder(orderId);
  // };
  // const handleOrderAccept = (orderId) => {
  //   OrderService.acceptOrder(orderId);
  // };

  useEffect(() => {
    DriverService.getDriverById(order.driverId)
      .then((res) => {
        setDriver(res.data);
      })
      .catch((_err) => {
        setDriver(null);
      });

    ClientService.getClientById(order.clientId)
      .then((res) => {
        setClient(res.data);
      })
      .catch((_err) => {
        setClient(null);
      });
  }, [order.driverId, order.clientId]);

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
      {user.role === "client"
        ? driver && (
            <OrderColumn>
              <OrderItem>Driver</OrderItem>
              <OrderValue>
                {driver.firstname} - {driver.truckno}
              </OrderValue>
            </OrderColumn>
          )
        : user.role === "driver"
        ? client && (
            <OrderColumn>
              <OrderItem>Client</OrderItem>
              <OrderValue>
                {client.firstname}&nbsp;{client.lastname}
              </OrderValue>
            </OrderColumn>
          )
        : null}
      <OrderColumn>
        <OrderItem>Date: </OrderItem>
        <OrderValue>{new Date(order.dateTime).toLocaleString()}</OrderValue>
      </OrderColumn>
      <OrderColumn>
        <OrderItem>Status: </OrderItem>
        <OrderValue>{order.status}</OrderValue>
      </OrderColumn>
      {order.status === "pending" && (
        <OrderColumn>
          {user.role === "driver" && <Button primary>Accept</Button>}
          <Button>Cancel</Button>
        </OrderColumn>
      )}
    </OrderDetailsContainer>
  );
};

export default OrderDetails;
