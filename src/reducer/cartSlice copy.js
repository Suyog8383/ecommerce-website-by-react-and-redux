import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts2: [],
};
export const cartSliceCopy = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart2: (state, action) => {
      const find = state.cartProducts2.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cartProducts2[find].quantity += 1;
        state.cartProducts2[find].subTotal +=
          state.cartProducts2[find].quantity * state.cartProducts2[find].price;
      } else {
        const tempVar = { ...action.payload };
        tempVar.quantity = 1;
        tempVar.subTotal = tempVar.price;
        state.cartProducts2.push(tempVar);
      }
    },
    clearCart: (state) => {
      state.cartProducts2 = [];
    },

    clearItem: (state, action) => {
      const find = state.cartProducts2.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartProducts2.splice(find, 1);
    },
  },
});

export const { AddCart2, clearCart, clearItem } = cartSliceCopy.actions;

export default cartSliceCopy.reducer;
