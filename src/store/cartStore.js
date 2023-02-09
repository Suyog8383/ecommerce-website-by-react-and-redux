import { configureStore } from "@reduxjs/toolkit";
import productsReducer2 from "../reducer/cartSlice copy";
import productsReducer from "../reducer/cartSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    products: productsReducer,
    products2: productsReducer2,
  },
});
