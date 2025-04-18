import { toastError } from "../components/toaster/Toaster";
import { callApi } from "./axios";

export const getAllProducts = async () => {
  try {
    return await callApi("api/products", "GET");
  } catch (error) {
    toastError("Error while fetching products");
    return Promise.reject(error);
  }
};
