const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.get("/api/users", controller.all);
};