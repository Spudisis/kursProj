import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  statementsUsers: [], //данные заявок ожидается рассмотрение
  checkStatementsUsers: [], //данные заявок в рассмотрении
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
          } else {
            console.log(action.payload.status);
            a.push(elem);
          }
        });

        console.log(a);
        state.statementsUsers = a;
      }
      if (action.payload.typeList === "statementCheck") {
        let b: any = [];
        const reduxMax2 = state.checkStatementsUsers.slice(0);
        if (action.payload.status === "Одобрено" || action.payload.status === "Отказано") {
          reduxMax2.forEach((elem: any) => {
            if (elem.id === action.payload.id) {
              elem.status = action.payload.status;
              console.log(elem.status);
            }
          });
          reduxMax2.filter((elem: any) => elem.status !== "Одобрено" || "Отказано");
          state.checkStatementsUsers = reduxMax2;
        } else {
          reduxMax2.forEach((elem: any) => {
            if (elem.id === action.payload.id) {
              elem.status = action.payload.status;
              console.log(elem.status);
            }
            if (elem.status === "Ожидается рассмотрение") {
              state.statementsUsers.push(elem);
            } else {
              console.log(action.payload.status);
              b.push(elem);
            }
          });
          console.log(b);
          state.checkStatementsUsers = b;
        }
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
