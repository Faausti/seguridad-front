import axios from "axios";

const sApi = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 6000,
  headers: {
    "Content-Type": "application/json",
  },
});

const apis = {
  postLogin: (data) => sApi.post("/login", data),
  postRegister: (data) => sApi.post("/register", data),
};

export default apis;
