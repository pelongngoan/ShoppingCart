import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configureStore";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import { IProduct } from "../interfaces";

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const onHandleUpdateQuantity = (
    product: IProduct,
    quantity: number,
    alert: boolean = true
  ) => {
    return dispatch(updateQuantity({ product, quantity, alert }));
  };
  const onHandleRemoveFromCart = (product: IProduct) => {
    return dispatch(removeFromCart(product));
  };
  return { cart, onHandleUpdateQuantity, onHandleRemoveFromCart };
};
