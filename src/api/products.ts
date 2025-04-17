import { callApi } from "./axios";

export const getAllProducts = async () => {
  try {
    return await callApi("api/products", "GET");
  } catch (error) {
    return Promise.reject(error);
  }
};
