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

  completeRegistration(userId, truckno, dlno, address) {
    return axios.post(API_URL + "complete-registration", {
      userId,
      truckno,
      dlno,
      address,
    });
  }
}

export default new DriverService();
