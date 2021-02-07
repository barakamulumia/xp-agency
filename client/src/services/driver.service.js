import axios from "axios";

const API_URL = "http://localhost:8080/api/drivers/";

class DriverService {
  getDriverById(driverid) {
    return axios.get(API_URL + "findone", {
      headers: {
        driverid,
      },
    });
  }
}

export default new DriverService();
