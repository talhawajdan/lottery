import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./slices/auth/slice";
import { baseAPI } from "@/services/baseApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(baseAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export default store;
