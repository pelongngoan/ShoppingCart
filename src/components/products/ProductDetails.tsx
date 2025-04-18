import { Container } from "../ui-common/Container";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { useEffect, useState } from "react";
import Button from "../ui-common/Button";
import { UpdateQuantity } from "../update-quantity/UpdateQuantity";
import { useCart } from "../../hook/cart";
export const ProductDetails = () => {
  const { onHandleUpdateQuantity } = useCart();
  const { highlightProduct } = useSelector(
    (state: RootState) => state.products
  );
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    setQuantity(1);
  }, [highlightProduct]);

  const onIncrease = () => {
    setQuantity(quantity + 1);
  };
  const onDecrease = () => {
    setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    onHandleUpdateQuantity(highlightProduct, quantity);
  };

  return (
    <Container className="flex flex-col gap-5 bg-white rounded-lg p-5 max-w-2xl min-w-72">
      {!highlightProduct ? (
        ""
      ) : (
        <>
          <div className="flex justify-center items-center p-10 min-h-dvh">
            <img
              className="size-96 object-cover"
              src={
                highlightProduct.imageUrl || "https://via.placeholder.com/150"
              }
              alt={highlightProduct.productName}
            />
          </div>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-2xl font-bold">
                {highlightProduct.productName}
              </h1>
              <p className="text-sm text-gray-500">
                {highlightProduct.description}
              </p>
            </div>
            <div className="w-full flex flex-col justify-between items-center gap-5 sm:flex-row">
              <div className="w-full sm:w-2/3">
                <UpdateQuantity
                  quantity={quantity}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  price={highlightProduct.price}
                />
              </div>
              <div className="w-full sm:w-fit">
                <Button
                  className="bg-[#3B82F6] text-white hover:bg-blue-600 w-full"
                  onClick={() => {
                    handleAddToCart();
                  }}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </Container>
  );
};
