import { toast, ToastOptions } from "react-hot-toast";

const toastOptions: ToastOptions = {
  duration: 2000,
  position: "bottom-left",
  className: "shadow-xl text-md px-8",
  icon: "👏",
  ariaProps: {
    role: "status",
    "aria-live": "polite",
  },
};

export const toastSuccess = (msg: string, options?: ToastOptions): string => {
  return toast.success(msg, {
    ...toastOptions,
    ...options,
    style: {
      backgroundColor: "rgba(16,185,129,1)",
      color: "#fff",
    },
    className: `${toastOptions.className + " bg-[#10B981] text-white"}`,
  });
};

export const toastError = (msg: string, options?: ToastOptions): string =>
  toast.error(msg, {
    ...toastOptions,
    ...options,
    icon: "❌",
    style: {
      backgroundColor: "#fff",
      color: "#000",
      border: "2px solid #f56565",
    },
    className: `${
      toastOptions.className + " border-2 border-red-500 text-black"
    }`,
  });
