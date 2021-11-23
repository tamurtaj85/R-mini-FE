import { axiosInstance } from "./configs";

async function getProducts() {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export const ProductServices = {
  getProducts,
};
