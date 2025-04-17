import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../interfaces";
import { getAllProducts } from "../api/products";
import { setProducts, setHighlightProduct } from "../redux/productSlice";
import { RootState } from "../redux/configureStore";
import { updateQuantity } from "../redux/cartSlice";

export const useProducts = () => {
  const dispatch = useDispatch();
  const { products, highlightProduct } = useSelector(
    (state: RootState) => state.products
  );
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllProducts();
      if (response) {
        dispatch(setProducts(response.data));
        dispatch(setHighlightProduct(response.data[0]));
      }
    };
    fetchProducts();
  }, []);
  return { products, highlightProduct, setHighlightProduct };
};

export const useAddToCart = (product: IProduct, quantity: number) => {
  const dispatch = useDispatch();
  return () => {
    return dispatch(updateQuantity({ product, quantity }));
  };
};

// export const useAddToCart = (productId: number | string, quantity: number) => {
//   const dispatch = useDispatch();
//   return () => {
//     const addToCartInfos: ICart = {
//       productId: productId as string,
//       quantity,
//     };
//     const requireFields = ["productId", "quantity"];

//     const { isValid, errors } = validateObject(
//       requireFields,
//       addToCartInfos as unknown as Record<string, unknown>
//     );
//     if (!isValid || errors.length > 0) {
//       return toastError("Added Failed");
//     }
//     return dispatch(addToCart(addToCartInfos));
//   };
// };
