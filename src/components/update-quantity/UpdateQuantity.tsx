import { useState } from "react";
import Button from "../ui-common/Button";

interface IUpdateQuantityProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  incrementStyle?: string;
  decrementStyle?: string;
  maxQuantity?: number;
  minQuantity?: number;
}
export const UpdateQuantity = ({
  quantity,
  onIncrease,
  onDecrease,
  incrementStyle,
  decrementStyle,
  maxQuantity = 99,
  minQuantity = 1,
}: IUpdateQuantityProps) => {
  return (
    <div className="flex items-center gap-5 bg-gray-100 rounded-lg p-2">
      <Button
        className={`bg-gray-200 text-gray-500 font-bold ${
          quantity === minQuantity && "opacity-50 cursor-not-allowed"
        } ${decrementStyle}`}
        disabled={quantity === minQuantity}
        onClick={onDecrease}
      >
        <i
          className={`fa-solid fa-minus text-lg ${
            quantity === 1 ? "text-gray-500" : "text-[#e1772c]"
          }`}
        ></i>
      </Button>
      <p>{quantity}</p>
      <Button
        className={`bg-gray-200 text-gray-500 ${
          quantity === maxQuantity && "opacity-50 cursor-not-allowed"
        } ${incrementStyle}`}
        disabled={quantity === maxQuantity}
        onClick={onIncrease}
      >
        <i
          className={`fa-solid fa-plus text-lg ${
            quantity === 99 ? "text-gray-500" : "text-[#e1772c]"
          }`}
        ></i>
      </Button>
    </div>
  );
};
