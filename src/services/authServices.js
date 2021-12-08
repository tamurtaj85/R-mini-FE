import { axiosInstance } from "./configs";

export default async function doAuth(url, data) {
  try {
    const response = await axiosInstance.post(url, { ...data });
    // console.log(response.data);
    return response;
  } catch (error) {
    console.log("Axios:", error.toJSON());
  }
}
