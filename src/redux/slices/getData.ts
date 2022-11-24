import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: any = {
  data: [],
  view: false,
  viewData: {},
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload);
    },
    addData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    deleteData: (state, action: PayloadAction<number>) => {
      if (state.data) {
        state.data = state.data.filter((elem: any) => {
          return elem.id !== action.payload;
        });
      }
    },
    clearData: (state) => {
      state.data = [];
      state.viewData = {};
    },
    viewData: (state, action: PayloadAction<any>) => {
      state.viewData = action.payload;
    },
    viewSet: (state, action: PayloadAction<boolean>) => {
      state.view = action.payload;
    },
  },
});
export const getdata = (state: any) => state.data;

export const { setData, deleteData, clearData, viewSet, viewData, addData } = dataSlice.actions;

export default dataSlice.reducer;
