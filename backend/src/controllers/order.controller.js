const db = require("../models");
const Order = db.order;

exports.creteOrder = (req, res, next) => {
  const {
    moveType,
    clientId,
    driverId,
    pickup,
    destination,
    load,
    charges,
  } = req.body;

  const newOrder = new Order({
    moveType,
    clientId,
    driverId,
    pickup,
    destination,
    load,
    charges,
    date: new Date(),
  });

  newOrder.save((err, order) => {
    if (err) {
      res.status(500).json({
        message: err,
      });
      return;
    }

    res.status(200).json({
      message: "Order Created",
    });
    next();
  });
};

exports.getAllOrdersByUserId = (req, res, next) => {
  const { userid, role } = req.headers;
  let FIELD_TYPE = null;

  if (role === "client") {
    FIELD_TYPE = "clientId";
  } else if (role === "driver") {
    FIELD_TYPE = "driverId";
  }

  if (FIELD_TYPE) {
    Order.find(
      {
        [FIELD_TYPE]: userid,
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
          return;
        }
        res.status(200).json({
          orders,
        });
        next();
      }
    );
  } else {
    res.status(401).json({
      message: "Invalid request headers",
    });
    return;
  }
};

exports.changeOrderStatus = (req, res, next) => {
  const { orderId: _id, status } = req.body;

  Order.findOne(
    {
      _id,
    },
    (err, order) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
        return;
      }

      if (!order) {
        res.status(404).json({
          message: "order not found",
        });
        return;
      }

      order.status = status;
      order.save();

      res.status(200).json({
        message: `Order status changed to ${status}`,
      });
      next();
    }
  );
};
