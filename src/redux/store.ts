import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import person from "./slices/slice";
import data from "./slices/getData";
import statementsUsers from "./slices/superUser";
export const store = configureStore({
  reducer: { person, data, statementsUsers },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
