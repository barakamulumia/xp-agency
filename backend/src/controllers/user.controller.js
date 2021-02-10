const db = require("../models");
const Order = db.order;

exports.allAccess = (_req, res) => {
  res.status(200).json({
    content: "Public content",
  });
};

exports.driverBoard = (_req, res) => {
  res.status(200).json({
    content: "Driver content",
  });
};

exports.clientBoard = (req, res) => {
  Order.find(
    {
      clientId: req.userId,
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
        role: "client",
        orders,
      });
    }
  );
};

exports.adminBoard = (_req, res) => {
  res.status(200).json({
    content: "Admin content",
  });
};
