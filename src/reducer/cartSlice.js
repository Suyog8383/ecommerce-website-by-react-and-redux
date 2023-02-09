import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const find = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cartProducts[find].quantity += 1;
        state.cartProducts[find].subTotal +=
          state.cartProducts[find].quantity * state.cartProducts[find].price;
      } else {
        const tempVar = { ...action.payload };
        tempVar.quantity = 1;
        tempVar.subTotal = tempVar.price;
        state.cartProducts.push(tempVar);
      }
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },

    increment: (state, action) => {
      const find = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      let temp = state.cartProducts[find];
      temp.quantity += 1;
      temp.subTotal += temp.price;
    },

    decrement: (state, action) => {
      const find = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      let temp = state.cartProducts[find];
      temp.quantity -= 1;
      temp.subTotal -= temp.price;
    },
    clearItem: (state, action) => {
      const find = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartProducts.splice(find, 1);
    },
    getCartTotalandQuantity: (state) => {
      let total = 0;
      let quantity = 0;
      for (let item of state.cartProducts) {
        total += item.subTotal;
        quantity += item.quantity;
      }
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

export const {
  AddCart,
  clearCart,
  clearItem,
  increment,
  decrement,
  getCartTotalandQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
