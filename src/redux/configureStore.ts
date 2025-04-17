import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productSlice";
import { cartReducer } from "./cartSlice";
import { checkoutReducer } from "./checkoutSlice";
import { loadingReducer } from "./loadingSlice";
export const myStore = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;
