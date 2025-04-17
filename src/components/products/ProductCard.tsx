import { useDispatch } from "react-redux";
import { IProduct } from "../../interfaces";
import { Container } from "../ui-common/Container";
import { setHighlightProduct } from "../../redux/productSlice";
import { removeFromCart, updateQuantity } from "../../redux/cartSlice";
import { UpdateQuantity } from "../update-quantity/UpdateQuantity";

type CardVariant = "default" | "checkout";
interface ICardProps {
  product: IProduct;
  variant?: CardVariant;
  numOfItems?: number;
  className?: string;
}
export const ProductCard = ({
  product,
  variant = "default",
  numOfItems,
  className,
}: ICardProps) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeFromCart(product));
  };
  return (
    <Container
      className={`bg-white rounded-lg p-4 flex flex-col gap-5 lg:flex-row ${className}`}
    >
      <div className="w-full h-48">
        <img
          src={product.imageUrl || "https://via.placeholder.com/150"}
          alt={product.productName || "Product Image"}
        />
      </div>
      <div className="flex flex-col justify-between gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between gap-2">
            <h3 className="text-lg font-bold">{product.productName}</h3>
            {variant === "checkout" && (
              <i
                onClick={handleDelete}
                className="fa-solid fa-trash text-red-500 hover:cursor-pointer"
              ></i>
            )}
          </div>
          <p className="text-sm text-gray-500">{product.description}</p>
        </div>
        <div className="flex flex-row justify-between gap-2 items-center">
          {variant === "checkout" && (
            <UpdateQuantity
              quantity={numOfItems || 1}
              onIncrease={() =>
                dispatch(updateQuantity({ product, quantity: 1 }))
              }
              onDecrease={() =>
                dispatch(updateQuantity({ product, quantity: -1 }))
              }
            />
          )}
          <p className="text-lg font-bold">
            ${(product.price * (numOfItems || 1)).toFixed(2)}
          </p>
          {variant === "default" && (
            <p
              onClick={() => dispatch(setHighlightProduct(product))}
              className="text-blue-500 hover:text-blue-600 hover:cursor-pointer"
            >
              View Details
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};
