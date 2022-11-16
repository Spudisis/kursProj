import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  statementsUsers: [],
  checkStatementsUsers: [],
};
export const dataSlice = createSlice({
  name: "statementsUsers",
  initialState,
  reducers: {
    setDataUsers: (state, action: PayloadAction<any>) => {
      state.statementsUsers.push(action.payload);
    },
    setcheckStatementsUsers: (state, action: PayloadAction<any>) => {
      state.checkStatementsUsers.push(action.payload);
    },
    changeDataUsers: (state, action: PayloadAction<any>) => {
      if (action.payload.typeList === "statement") {
        let a: any = [];
        const reduxMas = state.statementsUsers.slice(0);
        reduxMas.forEach((elem: any) => {
          if (elem.id === action.payload.id) {
            elem.status = action.payload.status;
            console.log(elem.status);
          }
          if (elem.status === "В рассмотрении") {
            state.checkStatementsUsers.push(elem);
          } else if (action.payload.status !== "Одобрено" && action.payload.status !== "Отказано") {
            console.log(action.payload.status);
            a.push(elem);
          } else {
          }
        });
        state.statementsUsers = a;
      } else if (action.payload.typeList === "statementCheck") {
        let b: any = [];
        const reduxMax2 = state.checkStatementsUsers.slice(0);
        reduxMax2.forEach((elem: any) => {
          if (elem.id === action.payload.id) {
            elem.status = action.payload.status;
            console.log(elem.status);
          }
          if (elem.status === "Ожидается рассмотрение") {
            state.statementsUsers.push(elem);
          } else if (action.payload.status !== "Одобрено" && action.payload.status !== "Отказано") {
            console.log(action.payload.status);
            b.push(elem);
          } else {
          }
        });
        state.checkStatementsUsers = b;
      }
    },

    clearDataUsers: (state) => {
      state.statementsUsers = [];
      state.checkStatementsUsers = [];
    },
  },
});
export const getdataUsers = (state: any) => state.statementsUsers;

export const { setDataUsers, setcheckStatementsUsers, changeDataUsers, clearDataUsers } = dataSlice.actions;

export default dataSlice.reducer;
