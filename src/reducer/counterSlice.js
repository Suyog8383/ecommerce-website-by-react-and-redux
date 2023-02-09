import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  quantity: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      //     const { item.price, quantity
      // } = action.payload;
      state.value += action.payload;

      state.quantity += 1;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
      state.quantity -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
