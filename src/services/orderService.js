import { axiosInstance } from "./configs";

async function placeOrder(data) {
  try {
    return await axiosInstance.post("order", { ...data });
  } catch (error) {
    console.error(error.message, " ", error.response.data);
  }
}

export const Order = {
  placeOrder,
};
