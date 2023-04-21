import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { createWrapper } from "next-redux-wrapper";
// import authSliceReducer from "../features/auth/authSlice";
// import conversationsSliceReducer from "../features/conversations/conversationsSlice";
import citySliceReducer from "./citySlice/citySlice";

export const makeStore = () => 
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      cities : citySliceReducer
    },
    middleware: (gDM) => gDM().concat(apiSlice.middleware),
    devTools: true
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
