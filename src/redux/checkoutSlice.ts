import { createSlice } from "@reduxjs/toolkit";
import { ICheckout } from "../interfaces";
const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkout: {} as ICheckout,
  },
  reducers: {
    setCheckout: (state, action) => {
      state.checkout = action.payload;
    },
  },
});

export const { setCheckout } = checkoutSlice.actions;
export const checkoutReducer = checkoutSlice.reducer;
