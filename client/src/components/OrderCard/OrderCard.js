import { Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import DriverService from "../../services/driver.service";

const OrderCard = ({
  _id: orderId,
  status,
  moveType,
  pickUpAddress,
  destination,
  driverId,
  charges,
}) => {
  const [order, setOrder] = useState(undefined);

  const formatMoveType = (moveType) =>
    moveType === "hm"
      ? "House Moving"
      : moveType === "om"
      ? "Office Moving"
      : "Freight";

  DriverService.getDriverById(driverId).then((response) => {
    if (response.status === 200) {
      setOrder({
        orderId,
        status,
        moveType: formatMoveType(moveType),
        pickup: pickUpAddress.address,
        destination: destination.address,
        driver: response.data,
        charges,
      });
    }
  });

  return (
    <Paper
      elevation={6}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>Move Type{order.moveType}</Typography>
      <Typography>Status: {order.status}</Typography>
      <Typography>Driver: {order.driver}</Typography>
      <Typography>PickUp: {order.pickup}</Typography>
      <Typography>Destination: {order.destination}</Typography>
      <Typography>
        Driver: {order.driver.firstname} {order.driver.lastname}
      </Typography>
      <Typography>Charges: {order.charges}</Typography>
      <Typography>Truck: {order.driver.truckno}</Typography>
    </Paper>
  );
};

export default OrderCard;

// const sampleOrder = {
//   pickUpAddress: {
//     address: "Ngara, Nairobi",
//     placeId: "1020",
//     latLng: "03745 -=iedj",
//   },
//   destination: {
//     address: "Parklands, Nairobi",
//     placeId: "1020",
//     latLng: "03745 -=iedj",
//   },
//   status: "pending",
//   dateTime: "2021-02-07T11:02:04.278Z",
//   _id: "601fca9fa69bba33f4e2ad59",
//   moveType: "fr",
//   clientId: "601667e4d14c2715888e4623",
//   driverId: "601fc95aa69bba33f4e2ad58",
//   charges: 4502,
//   __v: 0,
// };
