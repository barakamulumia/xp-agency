import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

class UserAPI {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getClientBoard() {
    return axios.get(API_URL + "client", { headers: authHeader() });
  }

  getDriverBoard() {
    return axios.get(API_URL + "driver", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserAPI();
