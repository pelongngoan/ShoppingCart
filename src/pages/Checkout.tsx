import { useSelector } from "react-redux";
import { RootState } from "../redux/configureStore";
import { Container } from "../components/ui-common/Container";
import { ProductCard } from "../components/products/ProductCard";
import Button from "../components/ui-common/Button";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  return (
    <Container className="grid grid-rows-12 gap-5 max-w-5xl p-4 min-w-sm">
      <div className="row-span-1 flex flex-col gap-5 bg-white rounded-lg p-5 items-center justify-between">
        <h1 className="text-2xl font-bold">My Shopping Cart</h1>
      </div>
      <div className="row-span-11 grid grid-rows-12 gap-5 w-full lg:grid-cols-12">
        <div className="row-span-12 grid grid-rows-12 lg:col-span-8 gap-5 min-w-[300px] rounded-lg">
          {cart.map((item, index) => {
            return (
              <ProductCard
                className="p-4 row-span-12 lg:row-span-3"
                product={item.product}
                numOfItems={item.quantity}
                key={index}
                variant="checkout"
              />
            );
          })}
        </div>
        <div className="row-span-12 grid grid-rows-12 lg:col-span-4 gap-5 min-w-[300px]">
          <div className="row-span-12 bg-gray-100 rounded-lg p-4 lg:row-span-3">
            <div className=" grid grid-rows-12 gap-5">
              <h2 className="text-lg font-bold row-span-3">Order Info</h2>
              <p className="flex flex-row justify-between text-[1rem] row-span-3">
                Subtoal:
                <strong>
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
                <p>
                  {(
                    cart.reduce(
                      (acc, item) => acc + item.product.price * item.quantity,
                      0
                    ) + (cart.length > 0 ? 10 : 0)
                  ).toFixed(2)}
                </p>
              </p>
            </div>
          </div>
          <div className="row-span-12 gap-5 rounded-lg grid grid-rows-12">
            <Button className="bg-blue-500 text-white hover:bg-blue-600 w-full">
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
