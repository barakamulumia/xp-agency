import React, { useEffect, useState } from "react";
import { DriverService, ClientService, OrderService } from "../../services";
import { Button } from "../../Resources/Styles/global";

import {
  OrderDetailsContainer,
  OrderDetailsHeader,
  OrderColumn,
  OrderItem,
  OrderValue,
} from "./OrderDetails.elements";

const OrderDetails = ({ order, user }) => {
  const { _id } = order;
  const [driver, setDriver] = useState(null);
  const [client, setClient] = useState(null);
  const [message, setMessage] = useState("");

  const handleOrderCancel = () => {
    OrderService.cancelOrder(_id)
      .then((response) => {
        if (response.status === 200) {
          setMessage(response.data);
          console.log(message);
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOrderAccept = () => {
    OrderService.acceptOrder(_id)
      .then((response) => {
        if (response.status === 200) {
          setMessage(response.data);
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOrderComplete = () => {
    OrderService.completeOrder(_id)
      .then((response) => {
        if (response.status === 200) {
          setMessage(response.data);
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      {order.status === "pending" &&
        (user.role === "driver" ? (
          <OrderColumn>
            <Button primary onClick={handleOrderAccept}>
              Accept
            </Button>
            <Button primary>Decline</Button>
          </OrderColumn>
        ) : (
          user.role === "client" && (
            <OrderColumn>
              <Button onClick={handleOrderCancel}>Cancel</Button>
            </OrderColumn>
          )
        ))}
      {order.status === "in-progress" && (
        <OrderColumn>
          <Button onClick={handleOrderComplete}>Complete Trip</Button>
        </OrderColumn>
      )}
    </OrderDetailsContainer>
  );
};

export default OrderDetails;
