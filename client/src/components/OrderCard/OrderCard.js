import React from "react";
import {
  OrderContainer,
  OrderCardHeader,
  OrderDestination,
} from "./OrderCard.elements";
// const sampleOrder = {
//   _id: "60239067af951507404f8cbf",
//   pickup: {
//     latlng: {
//       lat: -1.262258,
//       lng: 36.8069072,
//     },
//     address:
//       "Mpaka Rd, West Point Building, 6th Floor, Parklands Nairobi KE, Nairobi, Kenya",
//     placeId: "ChIJOxeCyNYQLxgR97ZoGN0GJQc",
//   },
//   destination: {
//     latlng: {
//       lat: -1.2715319,
//       lng: 36.8204853,
//     },
//     address: "Stima Plaza, Nairobi, Kenya",
//     placeId: "ChIJz3yHGyYXLxgR0fXysDZ-NNI",
//   },
//   load: "Designated",
//   status: "pending",
//   dateTime: "2021-02-10T07:47:11.872Z",
//   moveType: "fr",
//   clientId: "601667e4d14c2715888e4623",
//   driverId: "601fc95aa69bba33f4e2ad58",
//   charges: 4000,
//   __v: 0,
// };

const OrderCard = ({ order }) => {
  const formatMoveType = (moveType) =>
    moveType === "hm"
      ? "House Moving"
      : moveType === "om"
      ? "Office Moving"
      : "Freight";

  return (
    <OrderContainer elevation={6}>
      <OrderCardHeader>{formatMoveType(order.moveType)}</OrderCardHeader>
      <OrderDestination>{order.destination.address}</OrderDestination>
    </OrderContainer>
  );
};

export default OrderCard;
