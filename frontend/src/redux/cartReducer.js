import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    totalpricee: (state, action) => {
      state.total = action.payload
    },
  },
});

export const { totalpricee } = cartSlice.actions;
export default cartSlice.reducer;