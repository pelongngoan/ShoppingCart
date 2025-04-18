import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api/products";
import { setProducts, setHighlightProduct } from "../redux/productSlice";
import { RootState } from "../redux/configureStore";
import { IProduct } from "../interfaces";

export const useProducts = () => {
  const dispatch = useDispatch();
  const { products, highlightProduct } = useSelector(
    (state: RootState) => state.products
  );
  const fetchProducts = async () => {
    const response = await getAllProducts();
    if (response) {
      dispatch(setProducts(response.data));
      dispatch(setHighlightProduct(response.data[0]));
    }
  };
  const onHandleSetHighlightProduct = (product: IProduct) => {
    dispatch(setHighlightProduct(product));
  };

  return {
    products,
    highlightProduct,
    onHandleSetHighlightProduct,
    fetchProducts,
  };
};
