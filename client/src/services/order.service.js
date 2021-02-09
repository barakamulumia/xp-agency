import axios from "axios";

const API_URL = "http://localhost:8080/api/orders/";

class OrderService {
  getAllOrders(userId) {
    return axios.get(API_URL + "client", {
      headers: {
        userId,
      },
    });
  }

  makeOrder(orderDetails) {
    const {
      moveType,
      clientId,
      driverId,
      pickup,
      destination,
      load,
      charges,
    } = orderDetails;
    return axios.post(API_URL + "create", {
      moveType,
      clientId,
      driverId,
      pickup,
      destination,
      load,
      charges,
    });
  }

  getCompletedOrders(userId) {}

  getPendingOrders(userId) {}

  getCancelledOrders(userId) {}
}

export default new OrderService();
