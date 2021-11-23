import { axiosInstance } from "./configs";

export async function getCategoriesList() {
  try {
    const response = await axiosInstance.get("/categories");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
