import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer, // creteApi is giving this .reducer key
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware), // getDefaultMiddleware => all default middleware => I ca concat my middle in this  i.e. createAPi is returnong .middleware
});
