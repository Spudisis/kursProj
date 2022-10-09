import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import Slice from "./slices/slice";
export const store = configureStore({
  reducer: { Slice },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
