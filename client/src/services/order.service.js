import axios from "axios";

const API_URL = "http://localhost:8080/api/order/";

class OrderService {
  getAllOrders(userId) {
    return axios.get(API_URL + "all", {
      headers: {
        userId,
      },
    });
  }

  makeOrder(moveType, clientId, driverId, pickupAdress, destination) {
    return axios.post(API_URL + "create", {
      moveType,
      clientId,
      driverId,
      pickupAdress,
      destination,
    });
  }

  getCompletedOrders(userId) {}

  getPendingOrders(userId) {}

  getCancelledOrders(userId) {}
}

export default new OrderService();
