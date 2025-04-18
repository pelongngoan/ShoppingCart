import { IProduct } from "../../interfaces";
import { Container } from "../ui-common/Container";
import { UpdateQuantity } from "../update-quantity/UpdateQuantity";
import { useCart } from "../../hook/cart";
import { useProducts } from "../../hook/products";
import { useEffect } from "react";

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
  const { onHandleRemoveFromCart, onHandleUpdateQuantity } = useCart();
  const { onHandleSetHighlightProduct } = useProducts();
  useEffect(() => {
    if (numOfItems === 0) {
      onHandleRemoveFromCart(product);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numOfItems]);
  const handleDelete = () => {
    onHandleRemoveFromCart(product);
  };
  return (
    <Container
      className={`grid grid-cols-12 bg-white rounded-lg p-4 gap-5 lg:flex-row ${className}`}
    >
      <div className="col-span-4 flex justify-center items-center">
        <img
          className="size-24 object-cover"
          src={product.imageUrl || "https://via.placeholder.com/150"}
          alt={product.productName || "Product Image"}
        />
      </div>
      <div className="col-span-8 flex flex-col justify-between gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between gap-2">
            <h3 className="text-lg font-bold">{product.productName}</h3>
            {variant === "checkout" && (
              <i
                onClick={handleDelete}
                className="fa-solid fa-trash text-[#EF4444] hover:text-red-600 active:scale-95 hover:cursor-pointer"
              ></i>
            )}
          </div>
          <p className="text-sm text-gray-500">{product.description}</p>
        </div>
        <div className="flex flex-row justify-end gap-2 items-center">
          {variant === "checkout" && (
            <UpdateQuantity
              price={product.price}
              quantity={numOfItems || 1}
              minQuantity={0}
              onIncrease={() => onHandleUpdateQuantity(product, 1, false)}
              onDecrease={() => onHandleUpdateQuantity(product, -1, false)}
            />
          )}
          {variant === "default" && (
            <p
              onClick={() => onHandleSetHighlightProduct(product)}
              className="text-blue-500 hover:text-blue-600 hover:cursor-pointer active:scale-95"
            >
              View Details
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};
