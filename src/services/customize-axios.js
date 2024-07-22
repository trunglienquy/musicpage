import axios from "axios";

const instance = axios.create({
  baseURL: 'https://reqres.in' // can change address API backend is here
  // baseURL: "http://26.170.181.245:8080",
});

export default instance;
