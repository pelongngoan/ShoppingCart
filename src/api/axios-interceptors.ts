import { AxiosInstance } from "axios";
import { myStore } from "../redux/configureStore";
import { toggleLoading } from "../redux/loadingSlice";

let callingApis = 0;

const onDispatchLoading = (status = false) => {
  const { loading } = myStore.getState().loading;
  switch (status) {
    case true: {
      return !loading && callingApis > 0
        ? myStore.dispatch(toggleLoading(status))
        : null;
    }
    case false: {
      return callingApis <= 0 && loading
        ? setTimeout(() => myStore.dispatch(toggleLoading(status)), 1000)
        : null;
    }
    default:
      return null;
  }
};

const onToggleLoading = (status = false) => {
  switch (status) {
    case true:
      callingApis++;
      return onDispatchLoading(status);
    case false:
      callingApis--;
      return onDispatchLoading(status);
    default:
      callingApis--;
      return onDispatchLoading(Boolean(status));
  }
};
export const loadingInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      onToggleLoading(true);
      return config;
    },
    (error) => {
      onToggleLoading(false);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      onToggleLoading(false);
      return response;
    },
    (error) => {
      onToggleLoading(false);
      return Promise.reject(error);
    }
  );
};
