import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces";
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [] as IProduct[],
    highlightProduct: {} as IProduct,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setHighlightProduct: (state, action) => {
      state.highlightProduct = action.payload;
    },
  },
});

export const { setProducts, setHighlightProduct } = productSlice.actions;

export const productReducer = productSlice.reducer;
