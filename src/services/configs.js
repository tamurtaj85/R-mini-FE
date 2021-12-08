import axios from "axios";

const BASE_URL = "http://localhost:3000"; //BE ip for local machine
// const BASE_URL = "http://ec2-3-251-76-179.eu-west-1.compute.amazonaws.com:3000"; //for AWS server BE

const USER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzFjMGZkYTIyOTk3MmQ5MjkxZmFlZCIsImlhdCI6MTYzNTc2MzIyMiwiZXhwIjoxNjQ0NDAzMjIyfQ.V4c8yw0wEaL1LsGuA4KKYr7YHNEEY9xfSf-wCf2V1d8";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    // "Access-Control-Allow-Origin": BASE_URL,
    // "Access-Control-Allow-Headers":
    //   "Origin, X-Requested-With, Content-Type, Accept",
    // "auth-token-header": USER_TOKEN,
    Authorization: USER_TOKEN,
  },
});
