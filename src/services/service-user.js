import { axiosInstance } from "./configs";

async function getUserByID(uID) {
  try {
    return await axiosInstance.get(`user/:${uID}`);
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}

export const Users = {
  getUserByID,
};
