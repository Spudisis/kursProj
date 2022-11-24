import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type person = {
  uid: string;
  statusSite: any;
  EmailUser: string;
};

const initialState: person = {
  uid: "",
  statusSite: "",
  EmailUser: "",
};
export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPerson: (state, action: PayloadAction<string>) => {
      state.uid = action.payload;
    },
    clearId: (state) => {
      state.uid = "";
    },

    setStatusSite: (state, action: PayloadAction<boolean>) => {
      state.statusSite = action.payload;
    },
    clearStatusSite: (state) => {
      state.statusSite = "";
    },
    setEmailUser: (state, action: PayloadAction<string>) => {
      state.EmailUser = action.payload;
    },
    clearEmailUser: (state) => {
      state.EmailUser = "";
    },
  },
});
export const getUid = (state: RootState) => state.person;
export const getStatusSite = (state: RootState) => state.person;
export const getEmailUser = (state: RootState) => state.person;
export const { setPerson, clearId, setStatusSite, clearStatusSite, setEmailUser, clearEmailUser } = personSlice.actions;

export default personSlice.reducer;
