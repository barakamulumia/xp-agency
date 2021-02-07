const controller = require("../controllers/order.controller");

module.exports = function (app) {
  app.get("/api/orders/client", controller.getAllOrdersByUserId);

  app.post("/api/orders/create", controller.creteOrder);
};
