import { useDispatch, useSelector } from "react-redux";
import { ICheckout } from "../interfaces";
import { RootState } from "../redux/configureStore";
import { callServerCheckout } from "../api/checkout";
import { setCheckout } from "../redux/checkoutSlice";
import { clearCart } from "../redux/cartSlice";
import { toastSuccess } from "../components/toaster/Toaster";
import { useNavigate } from "react-router-dom";
export const useCheckout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsInOrder = useSelector((state: RootState) => state.cart.cart);
  const onHandleCheckout = async () => {
    const checkoutData: ICheckout = {
      productsInOrder: productsInOrder.map((product) => {
        return {
          productId: product.product.productId,
          quantity: product.quantity,
        };
      }),
      paySuccess: false,
    };
    const payConfirm = window.confirm(`Do you want to purchase ?`);
    if (payConfirm) {
      checkoutData.paySuccess = true;
      const response = await callServerCheckout(checkoutData);
      if (response) {
        toastSuccess(`Thank you for your purchase`);
        dispatch(setCheckout(response.data));
        dispatch(clearCart());
        navigate("/products");
      }
    }
  };
  return { onHandleCheckout };
};
