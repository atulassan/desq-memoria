import axios from "axios";

const API_URL = process.env.API_URL+'/memoria';
class AuthService {
  login(username:any, password:any) {
    return axios
      .post(API_URL + "/login", { loginame:username, password })
      .then((response) => {
        console.log('rrsss',response);
        if (response.data.response) {
          localStorage.setItem("user", JSON.stringify(response.data.response));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(customerData:any) {
    return axios.post(API_URL + "/signup", customerData);
  }

  myprofile() {
    //localStorage.getItem("user");
    //return axios.get(API_URL + '')
    return "testing";
  }
  checkVerifyToken(data:any) {
    return axios.post(API_URL + "/check-token",data);
  }
  verifyToken(data:any) {
    return axios.post(API_URL + "/create/password",data);
  }

}

export default new AuthService();