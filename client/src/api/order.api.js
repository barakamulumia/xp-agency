import axios from "axios";

const API_URL = "http://localhost:8080/api/orders/";

class OrderAPI {
  getAllOrders(userid, role) {
    return axios.get(API_URL + "user", {
      headers: {
        userid,
        role,
      },
    });
  }

  addNewOrder(orderDetails) {
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

  updateOrder(order) {
    const { orderId, status } = order;
    return axios.post(API_URL + "update", {
      orderId,
      status,
    });
  }
}

export default new OrderAPI();
