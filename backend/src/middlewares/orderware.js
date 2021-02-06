const db = require("../models");
const Order = db.order;

const creteOrder = (req, res) => {
  const {
    moveType,
    clientId,
    driverId,
    pickUpAddress,
    destination,
    amount,
  } = req.body;

  const newOrder = new Order({
    moveType,
    clientId,
    driverId,
    pickUpAddress,
    destination,
    amount,
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
  });
};

const getAllOrdersByUserId = (req, res, next) => {
  const { userid } = req.headers;
  Order.find(
    {
      clientId: userid,
    },
    (err, orders) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
        return;
      }
      res.status(200).json({
        orders,
      });
      next();
    }
  );
};

module.exports = {
  creteOrder,
  getAllOrdersByUserId,
};
