import { axiosInstance } from "./configs";

export async function getCategoriesList() {
  try {
    return await axiosInstance.get("/categories");
  } catch (error) {
    console.log("Axios:", error.toJSON());
  }
}
