import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  sale: false,
};
export const dataSlice = createSlice({
  name: "Slice",
  initialState,
  reducers: {
    changeParamSale: (state) => {
      state.sale = state.sale;
    },
  },
});

export const { changeParamSale } = dataSlice.actions;

export default dataSlice.reducer;
