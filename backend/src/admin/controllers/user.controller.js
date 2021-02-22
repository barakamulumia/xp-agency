const db = require("../../models/");
const User = db.user;

exports.all = (_req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).json({
        message: err,
      });
      return;
    }
    if (!users) {
      res.status(404).json({
        message: "Users Not Found",
      });
      return;
    }
    res.set("content-range", users.length);
    const response = users.map((user) => {
      const { rating, _id: id, firstname, lastname, phoneno, email } = user;
      return {
        rating,
        id,
        firstname,
        lastname,
        phoneno,
        email,
      };
    });
    res.status(200).json(response);
  });
};
