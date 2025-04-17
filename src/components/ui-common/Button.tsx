import { memo, ButtonHTMLAttributes } from "react";

interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({
  className = "",
  children,
  disabled = false,
  ...props
}: IPropsButton) => {
  return (
    <button
      className={`flex items-center justify-center duration-100 shadow-md gap-2 rounded-md px-4 py-2 hover:cursor-pointer ${
        disabled && "opacity-50 cursor-not-allowed"
      } ${className}`}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default memo(Button);
