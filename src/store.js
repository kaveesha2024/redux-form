import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./utility/formSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, formReducer);

export const store = configureStore({
  reducer: {
    form: persistedReducer,
  },
});

export const persist = persistStore(store);
