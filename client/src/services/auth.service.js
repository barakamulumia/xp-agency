import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(email, password, roles = []) {
    return axios
      .post(API_URL + "signin", {
        email,
        password,
        roles,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstname, lastname, email, phoneno, password, roles = []) {
    return axios.post(API_URL + "signup", {
      firstname,
      lastname,
      email,
      phoneno,
      password,
      roles,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
