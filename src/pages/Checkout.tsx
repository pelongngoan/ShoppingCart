import { useSelector } from "react-redux";
import { RootState } from "../redux/configureStore";
import { Container } from "../components/ui-common/Container";
import { ProductCard } from "../components/products/ProductCard";
import Button from "../components/ui-common/Button";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../hook/checkout";

export const Checkout = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const { onHandleCheckout } = useCheckout();
  const navigate = useNavigate();
  const renderCheckout = () => {
    if (cart.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-white rounded-lg lg:max-h-[200px]">
          <h1 className="text-2xl font-bold">You have no products in cart.</h1>
        </div>
      );
    }
    return cart.map((item, index) => {
      return (
        <ProductCard
          className="p-4 h-[200px] min-w-md"
          product={item.product}
          numOfItems={item.quantity}
          key={index}
          variant="checkout"
        />
      );
    });
  };
  return (
    <Container className="grid grid-rows-12 gap-5 max-w-5xl p-4 min-w-md ">
      <div className="row-span-1 flex flex-col gap-5 p-4 bg-white rounded-lg items-center justify-center">
        <h1 className="text-2xl font-bold">My Shopping Cart</h1>
      </div>
      <div className="row-span-10 lg:grid-cols-12 grid grid-rows-12 gap-5 w-full  ">
        <div
          className={`row-span-12 lg:col-span-8 flex flex-col gap-5 min-w-[300px] rounded-lg items-center justify-center lg:justify-start "
           `}
        >
          {renderCheckout()}
        </div>
        <div className="row-span-12 flex flex-col lg:col-span-4 gap-5 min-w-md lg:min-w-full">
          <div className="row-span-2 bg-gray-100 rounded-lg p-4 ">
            <div className=" flex flex-col gap-5">
              <h2 className="text-lg font-bold row-span-3">Order Info</h2>
              <p className="flex flex-row justify-between text-[1rem] row-span-3">
                Subtoal:
                <strong>
                  $
                  {(
                    cart.reduce(
                      (acc, item) => acc + item.product.price * item.quantity,
                      0
                    ) + 0
                  ).toFixed(2)}
                </strong>
              </p>
              <p className="flex flex-row justify-between text-[1rem] row-span-3">
                Shipping Cost:{" "}
                <strong>${cart.length > 0 ? "10.00" : "0"}</strong>
              </p>
              <p className="flex flex-row justify-between text-2xl font-bold row-span-3">
                Total:
                <span className="text-2xl font-bold">
                  $
                  {(
                    cart.reduce(
                      (acc, item) => acc + item.product.price * item.quantity,
                      0
                    ) + (cart.length > 0 ? 10 : 0)
                  ).toFixed(2)}
                </span>
              </p>
            </div>
          </div>
          <div className="row-span-10 gap-5 rounded-lg flex flex-col">
            <Button
              className="bg-[#3B82F6] text-white hover:bg-blue-600 w-full"
              onClick={() => {
                onHandleCheckout();
              }}
              disabled={cart.length === 0}
            >
              Checkout
            </Button>
            <Button
              className="border-2 border-blue-500 text-blue-500 hover:text-blue-600 hover:bg-white w-full"
              onClick={() => {
                navigate("/products");
              }}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
