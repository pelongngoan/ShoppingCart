import Button from "../ui-common/Button";

interface IUpdateQuantityProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  incrementStyle?: string;
  decrementStyle?: string;
  maxQuantity?: number;
  minQuantity?: number;
  price: number;
}
export const UpdateQuantity = ({
  quantity,
  onIncrease,
  onDecrease,
  incrementStyle,
  decrementStyle,
  maxQuantity = 99,
  minQuantity = 1,
  price,
}: IUpdateQuantityProps) => {
  return (
    <div className="w-full flex justify-between items-center gap-5">
      <div className="flex items-center gap-5 rounded-lg bg-gray-100 ">
        <Button
          className={`bg-gray-200 text-gray-500 font-bold ${
            quantity === minQuantity && "opacity-50 cursor-not-allowed"
          } ${decrementStyle}`}
          disabled={quantity === minQuantity}
          onClick={onDecrease}
        >
          <i
            className={`fa-solid fa-minus text-lg ${
              quantity === minQuantity ? "text-gray-500" : "text-[#FF7300]"
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
              quantity === maxQuantity ? "text-gray-500" : "text-[#FF7300]"
            }`}
          ></i>
        </Button>
      </div>
      <div className="flex items-center gap-5">
        <p className="text-2xl font-bold">${(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};
