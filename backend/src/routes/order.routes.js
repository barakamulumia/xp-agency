const { orderWare } = require("../middlewares");

module.exports = function (app) {
  app.use(function (_req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/orders/all", orderWare.getAllOrdersByUserId);

  app.post("/api/orders/create", orderWare.creteOrder);
};
