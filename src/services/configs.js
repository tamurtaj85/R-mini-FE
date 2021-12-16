// import { useContext } from "react";
import axios from "axios";
// import { USER_TOKEN } from "../pages";

const BASE_URL = "http://localhost:3000"; //BE ip for local machine
// const BASE_URL = "http://ec2-3-251-76-179.eu-west-1.compute.amazonaws.com:3000"; //for AWS server BE

// const USER_TOKEN_S =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzFjMGZkYTIyOTk3MmQ5MjkxZmFlZCIsImlhdCI6MTYzNTc2MzIyMiwiZXhwIjoxNjQ0NDAzMjIyfQ.V4c8yw0wEaL1LsGuA4KKYr7YHNEEY9xfSf-wCf2V1d8";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1500,
});
