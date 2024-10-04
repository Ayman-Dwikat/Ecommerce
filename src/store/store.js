import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./services/productApi";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";
import orderReducer from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    search: searchReducer,
    order: orderReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
