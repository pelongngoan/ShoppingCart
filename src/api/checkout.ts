import { ICheckout } from "../interfaces";
import { callApi } from "./axios";

export const callServerCheckout = async (payload: ICheckout) => {
  try {
    return await callApi("/checkout", "POST", { data: payload });
  } catch (error) {
    return Promise.reject(error);
  }
};
