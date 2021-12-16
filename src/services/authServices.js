import { axiosInstance } from "./configs";

export default async function doAuth(url, data) {
  try {
    return await axiosInstance.post(url, { ...data });
  } catch (error) {
    console.log("Axios: ", error.toJSON(), "Response: ", error?.response);
    return error?.response ?? error.toJSON();
  }
}
