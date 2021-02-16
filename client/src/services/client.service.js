import axios from "axios";

const API_URL = "http://localhost:8080/api/clients/";

class ClientService {
  getClientById(clientid) {
    return axios.get(API_URL + "findone", {
      headers: {
        clientid,
      },
    });
  }
}

export default new ClientService();
