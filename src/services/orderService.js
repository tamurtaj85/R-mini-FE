import { USER_TOKEN } from "../pages";
import { axiosInstance } from "./configs";

async function placeOrder(data) {
  try {
    return await axiosInstance.post(
      "order",
      { ...data },
      { headers: { Authorization: USER_TOKEN } }
    );
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}

export const Order = {
  placeOrder,
};
