import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": BASE_URL,
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    // "auth-token-header": USER_TOKEN,
  },
});
