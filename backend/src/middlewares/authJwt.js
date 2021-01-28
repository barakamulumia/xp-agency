const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");

const User = db.user;
const Role = db.role;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthourized" });
    }
    req.userId = decoded.id;
    next();
  });
};

const isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).json({ message: err });
      return;
    }
    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    console.log(user);
    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).json({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            next();
            return;
          }
        }

        res.status(403).json({ message: "Require Admin role" });
        return;
      }
    );
  });
};

const isDriver = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    if (err) {
      res.status(500).json({ message: err });
      return;
    }
    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).json({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "driver") {
            next();
            return;
          }
        }

        res.status(403).json({ message: "Require Driver Role!" });
        return;
      }
    );
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isDriver,
};

module.exports = authJwt;
