import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  // headers: {
  //   "auth-token-header": USER_TOKEN,
  // },
});
