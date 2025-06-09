import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { catalogApi } from "./service/catalog-api";
import { categoryApi } from "./service/category-api";
import cartReducer from "./store/features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      catalogApi.middleware,
      categoryApi.middleware
    )
  }
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
