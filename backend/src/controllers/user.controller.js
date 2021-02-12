const db = require("../models");
const Order = db.order;
const User = db.user;

exports.allAccess = (_req, res) => {
  res.status(200).json({
    content: "Public content",
  });
};

exports.driverBoard = (req, res) => {
  User.findOne(
    {
      _id: req.userId,
    },
    (err, driver) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
        return;
      }
      if (!driver) {
        res.status(404).json({
          message: "orders not found",
        });
        return;
      }
      const { _id: userId, email, firstname, lastname, phoneno } = driver;

      res.status(200).json({
        userId,
        email,
        firstname,
        lastname,
        phoneno,
      });
    }
  );
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
