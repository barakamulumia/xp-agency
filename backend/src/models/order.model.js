const mongoose = require("mongoose");

const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    moveType: String,
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "Client is required",
    },
    driverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "Client is required",
    },
    pickUpAddress: {
      address: String,
      placeId: String,
      latLng: String,
    },
    destination: {
      address: String,
      placeId: String,
      latLng: String,
    },
    charges: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["idle", "pending", "cancelled", "successfull"],
      default: "idle",
    },
    dateTime: {
      type: Date,
      default: new Date(),
    },
  })
);

module.exports = Order;
