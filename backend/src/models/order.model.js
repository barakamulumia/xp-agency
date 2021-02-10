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
    pickup: {
      address: String,
      placeId: String,
      latlng: {
        lat: Number,
        lng: Number,
      },
    },
    destination: {
      address: String,
      placeId: String,
      latlng: {
        lat: Number,
        lng: Number,
      },
    },
    charges: {
      type: Number,
    },
    load: {
      type: String,
      default: "Designated",
    },
    status: {
      type: String,
      enum: ["pending", "cancelled", "in-progress", "successfull"],
      default: "idle",
    },
    dateTime: {
      type: Date,
      default: new Date(),
    },
  })
);

module.exports = Order;
