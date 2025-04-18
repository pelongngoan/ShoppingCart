import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "../interfaces";
import { toastError, toastSuccess } from "../components/toaster/Toaster";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as ICart[],
  },
  reducers: {
    updateQuantity: (state, action) => {
      const { product, quantity, alert } = action.payload;
      const existingItem = state.cart.find(
        (item) => item.product.productId === product.productId
      );
      if (existingItem) {
        if (existingItem.quantity + quantity > 99) {
          toastError(`Quantity cannot be greater than 99`);
          return;
        }
        existingItem.quantity += quantity;
        if (alert) {
          toastSuccess(`Added successfully`);
        }
      } else {
        state.cart.push(action.payload);
        toastSuccess(`Added successfully`);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.product.productId !== action.payload.productId
      );
      toastSuccess(`Removed successfully`);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
