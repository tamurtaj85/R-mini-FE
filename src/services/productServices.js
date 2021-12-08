import { axiosInstance } from "./configs";

async function getProducts() {
  try {
    return await axiosInstance.get("/products");
  } catch (error) {
    console.log("Axios:", error.toJSON());
  }
}

async function getProductByCategory(id) {
  try {
    return await axiosInstance.get(`/products/category/:${id}`);
  } catch (error) {
    console.log("Axios:", error.toJSON());
  }
}

export const ProductServices = {
  getProducts,
  getProductByCategory,
};
