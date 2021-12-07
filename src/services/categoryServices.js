import { axiosInstance } from "./configs";

export async function getCategoriesList() {
  try {
    return await axiosInstance.get("/categories");
  } catch (error) {
    console.error(error.message, "", error.response.data);
  }
}
