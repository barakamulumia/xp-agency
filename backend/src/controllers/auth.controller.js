const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  const {
    firstname,
    lastname,
    phoneno,
    email,
    password: userPassword,
    roles,
  } = req.body;

  const user = new User({
    firstname,
    lastname,
    phoneno,
    email,
    password: bcrypt.hashSync(userPassword, 11),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).json({ message: err });
      return;
    }

    if (roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).json({ message: err });
            return;
          }

          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).json({ message: err });
              return;
            }
            res.json({ message: "User was reqistered successfully" });
          });
        }
      );
    } else {
      Role.findOne(
        {
          name: "client",
        },
        (err, role) => {
          if (err) {
            res.status(500).json({ message: err });
            return;
          }
          user.roles = [role._id];
          user.save((err) => {
            if (err) {
              res.status(500).json({ message: err });
              return;
            }
            res.json({ message: "User was registered successfully" });
          });
        }
      );
    }
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({
    email,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).json({
          message: "User Not Found",
        });
      }

      let valid = bcrypt.compareSync(password, user.password);

      if (!valid) {
        return res.status(401).json({
          accessToken: null,
          message: "Invalid Password",
        });
      }

      let token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400,
      });

      let authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }

      const { _id: id, firstname, lastname, phoneno, email } = user;

      res.status(200).json({
        id,
        firstname,
        lastname,
        email,
        phoneno,
        roles: authorities,
        accessToken: token,
      });
    });
};
