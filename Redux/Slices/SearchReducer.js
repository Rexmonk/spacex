// First, define the reducer and action creators via `createSlice`
import { createSlice } from "@reduxjs/toolkit";
const SearchReducer = createSlice({
  name: "searchItems",
  initialState: {
    item: [],
    loading: false,
  },
  reducers: {
    setSearchItem: (state, action) => {
      state.item = action.payload;
    },
    setIsLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setSearchItem, setIsLoading } = SearchReducer.actions;
export default SearchReducer.reducer;
