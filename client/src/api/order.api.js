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

  acceptOrder(orderId) {
    return axios.post(API_URL + "statuschange", {
      orderId,
      status: "in-progress",
    });
  }

  completeOrder(orderId) {
    return axios.post(API_URL + "statuschange", {
      orderId,
      status: "successfull",
    });
  }

  cancelOrder(orderId) {
    return axios.post(API_URL + "statuschange", {
      orderId,
      status: "cancelled",
    });
  }
}

export default new OrderAPI();
