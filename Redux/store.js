import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./Slices/SearchReducer";
import { useDispatch, useSelector } from "react-redux";

// import config from 'config'

export const createStore = (preloadedState) => {
  const middlewares = [];

  return configureStore({
    reducer: {
      searchData: SearchReducer,
    },
    preloadedState,
  });
};

let store;
const initializeStore = (preloadedState) => {
  let _store = store || createStore(preloadedState);

  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  if (typeof window === "undefined") {
    return _store;
  }

  if (!store) {
    store = _store;
  }

  return store;
};

export const useStore = (preloadedState) => initializeStore(preloadedState);

export const useAppDispatch = () => useDispatch();

export const useAppSelector = useSelector;
