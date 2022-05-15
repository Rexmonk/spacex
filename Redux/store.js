import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./Slices/SearchReducer";

const store = configureStore({
  reducer: {
    searchData: SearchReducer,
  },
});

export default store;
