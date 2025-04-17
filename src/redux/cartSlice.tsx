import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "../interfaces";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as ICart[],
  },
  reducers: {
    updateQuantity: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.cart.find(
        (item) => item.product.productId === product.productId
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.product.productId !== action.payload.productId
      );
    },
  },
});

export const { removeFromCart, updateQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
