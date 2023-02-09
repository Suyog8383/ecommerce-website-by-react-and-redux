import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  quantity: 0,
};

export const cartSystem = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const find = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.carts[find].quantity += 1;
      } else {
        const tempVar = { ...action.payload, quantity: 1 };
        state.carts.push(tempVar);
      }
    },
  },
});

export const { AddCart } = cartSystem.actions;

export default cartSystem.reducer;
