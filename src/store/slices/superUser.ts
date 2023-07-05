import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  statementsUsers: [], //данные заявок ожидается рассмотрение
  checkStatementsUsers: [], //данные заявок в рассмотрении
  confirmStatementsUsers: [], //данные заявок Одобрено
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
        let reduxMas = state.statementsUsers.slice(0);

        reduxMas.forEach((elem: any) => {
          if (elem.id === action.payload.id) {
            elem.status = action.payload.status;
            console.log(elem.status);
          }
          if (elem.status === "В рассмотрении") {
            state.checkStatementsUsers.push(elem);
          } else if (elem.status === "Одобрено") {
            state.confirmStatementsUsers.push(elem);
          } else {
            console.log(action.payload.status);
            a.push(elem);
          }
        });

        console.log(a);
        state.statementsUsers = a;
      }
      if (action.payload.typeList === "statementCheck") {
        let a: any = [];
        let reduxMas = state.checkStatementsUsers.slice(0);

        reduxMas.forEach((elem: any) => {
          if (elem.id === action.payload.id) {
            elem.status = action.payload.status;
            console.log(elem.status);
          }
          if (elem.status === "Ожидается рассмотрение") {
            state.statementsUsers.push(elem);
          } else if (elem.status === "Одобрено") {
            state.confirmStatementsUsers.push(elem);
          } else {
            console.log(action.payload.status);
            a.push(elem);
          }
        });

        console.log(a);
        state.checkStatementsUsers = a;
      }

      if (action.payload.typeList === "statementConfirm") {
        let a: any = [];
        let reduxMas = state.confirmStatementsUsers.slice(0);

        reduxMas.forEach((elem: any) => {
          if (elem.id === action.payload.id) {
            elem.status = action.payload.status;
            console.log(elem.status);
          }
          if (elem.status === "В рассмотрении") {
            state.checkStatementsUsers.push(elem);
          } else if (elem.status === "Ожидается рассмотрение") {
            state.statementsUsers.push(elem);
          } else {
            console.log(action.payload.status);
            a.push(elem);
          }
        });

        console.log(a);
        state.confirmStatementsUsers = a;
      }
    },
    setconfirmStatementsUsers: (state, action: PayloadAction<any>) => {
      state.confirmStatementsUsers.push(action.payload);
    },
    clearDataUsers: (state) => {
      state.statementsUsers = [];
      state.checkStatementsUsers = [];
      state.confirmStatementsUsers = [];
    },
  },
});
export const getdataUsers = (state: any) => state.statementsUsers;

export const { setDataUsers, setcheckStatementsUsers, setconfirmStatementsUsers, changeDataUsers, clearDataUsers } =
  dataSlice.actions;

export default dataSlice.reducer;
