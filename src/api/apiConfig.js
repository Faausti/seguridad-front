import axios from "axios";

const sApi = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 6000,
  headers: {
    "Content-Type": "application/json",
  },
});

const apis = {
  getPublicKey: () => sApi.get("/get-public-pass"),
  postLogin: (data) => sApi.post("/login", data),
};

export default apis;
