import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: any = {
  data: [],
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload);
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
    },
  },
});
export const getdata = (state: any) => state.data;

export const { setData, deleteData, clearData } = dataSlice.actions;

export default dataSlice.reducer;
