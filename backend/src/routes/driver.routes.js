const controller = require("../controllers/driver.controller");
const { verifyXpressDriver: auth } = require("../middlewares");

module.exports = function (app) {
  app.get("/api/drivers/findone", controller.getDriverById);

  app.post(
    "/api/drivers/certify",
    [
      auth.checkDuplicateUserId,
      auth.checkDuplicateDlno,
      auth.checkDuplicateTruckNo,
    ],
    controller.XpressCertApplication
  );

  app.get("/api/drivers/all", controller.getAllDrivers);
};
