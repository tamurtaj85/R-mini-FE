import { axiosInstance } from "./configs";

async function getProducts() {
  try {
    return await axiosInstance.get("/products");
  } catch (error) {
    console.error(error.message, " ", error.response.data);
  }
}

export const ProductServices = {
  getProducts,
};
