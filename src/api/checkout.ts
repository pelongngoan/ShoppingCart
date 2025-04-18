import { toastError } from "../components/toaster/Toaster";
import { ICheckout } from "../interfaces";
import { callApi } from "./axios";

export const callServerCheckout = async (payload: ICheckout) => {
  try {
    return await callApi("api/checkout", "POST", { data: payload });
  } catch (error) {
    toastError("Error while checking out");
    return Promise.reject(error);
  }
};
