import { Container } from "../ui-common/Container";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { useEffect, useState } from "react";
import Button from "../ui-common/Button";
import { useAddToCart } from "../../hook/products";
import { UpdateQuantity } from "../update-quantity/UpdateQuantity";
export const ProductDetails = () => {
  const { highlightProduct } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    setQuantity(1);
  }, [highlightProduct]);
  const [quantity, setQuantity] = useState<number>(1);

  const onIncrease = () => {
    setQuantity(quantity + 1);
  };
  const onDecrease = () => {
    setQuantity(quantity - 1);
  };

  const handleAddToCart = useAddToCart(highlightProduct, quantity);

  return (
    <Container className="flex flex-col gap-5 bg-white rounded-lg p-5 max-w-2xl min-w-72">
      <div className="w-full h-96">
        <img
          src={highlightProduct.imageUrl || "https://via.placeholder.com/150"}
          alt={highlightProduct.productName}
        />
      </div>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-2xl font-bold">{highlightProduct.productName}</h1>
          <p className="text-sm text-gray-500">
            {highlightProduct.description}
          </p>
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-5 lg:flex-row">
          <UpdateQuantity
            quantity={quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
          <div className="flex items-center gap-5">
            <p className="text-2xl font-bold">
              ${(highlightProduct.price * quantity).toFixed(2)}
            </p>
            <Button
              className="bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
