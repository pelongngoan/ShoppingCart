import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  reducers: {
    toggleLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleLoading } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
