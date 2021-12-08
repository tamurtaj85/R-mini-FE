import { axiosInstance } from "./configs";

async function getProducts() {
  try {
    return await axiosInstance.get("/products");
  } catch (error) {
    console.error(error.message, " ", await error.response.data);
  }
}

async function getProductByCategory(id) {
  try {
    return await axiosInstance.get(`/products/category/:${id}`);
  } catch (error) {
    console.error(error.message, " ", await error.response.data);
  }
}

export const ProductServices = {
  getProducts,
  getProductByCategory,
};
