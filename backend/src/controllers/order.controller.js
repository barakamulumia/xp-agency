const db = require("../models");
const Order = db.order;

exports.creteOrder = (req, res, next) => {
  const {
    moveType,
    clientId,
    driverId,
    pickUpAddress,
    destination,
    charges,
  } = req.body;

  const newOrder = new Order({
    moveType,
    clientId,
    driverId,
    pickUpAddress,
    destination,
    charges,
    date: new Date(),
    status: "pending",
  });

  newOrder.save((err, order) => {
    if (err) {
      res.status(500).json({
        message: err,
      });
      return;
    }

    res.json({
      message: "Order Created",
    });
    next();
  });
};

exports.getAllOrdersByUserId = (req, res, next) => {
  const { clientid: clientId } = req.headers;
  Order.find(
    {
      clientId,
    },
    (err, orders) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
        return;
      }
      if (!orders) {
        res.status(404).json({
          message: "orders not found",
        });
      }
      res.status(200).json({
        orders,
      });
      next();
    }
  );
};
