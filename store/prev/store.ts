import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { testApi } from "./testApi";

export const makeStore = () => 
  configureStore({
    reducer: {
      [testApi.reducerPath]: testApi.reducer,
    },
    devTools: true,
    middleware: (gDM) => gDM().concat(testApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);