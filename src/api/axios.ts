import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { loadingInterceptors } from "./axios-interceptors";

const BASE_URL = import.meta.env.VITE_BASE_URL
  ? (import.meta.env.VITE_BASE_URL as string)
  : "";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

loadingInterceptors(axiosInstance);

export const callApi = async (
  url: string,
  method: Method,
  configs?: AxiosRequestConfig
) => {
  try {
    const response: AxiosResponse = await axiosInstance({
      url,
      method,
      ...configs,
    });
    return response;
  } catch (error) {
    if (error) {
      return Promise.reject(error);
    }
  }
};
