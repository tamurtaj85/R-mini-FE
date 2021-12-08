import { axiosInstance } from "./configs";

async function placeOrder(data) {
  try {
    return await axiosInstance.post("order", { ...data });
  } catch (error) {
    console.log("Axios:", error.toJSON());
  }
}

export const Order = {
  placeOrder,
};
