import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";


export const counterSlice = createSlice({
  name: "unsaved_reducer",
  initialState: {
    allData: {
      status: [
        {
          id: 1,
          name: "1",
        },
        {
          id: 0,
          name: "0",
        },
      ],
      client_status: [
        { id: 1, name: "Potensial mijoz" },
        { id: 2, name: "Real Mijoz" },
        { id: 3, name: "Rad etilgan mijoz" },
      ],
      order_reason: [
        {
          id: 1,
          name: "Frontend",
        },
        {
          id: 2,
          name: "Backend",
        },
        {
          id: 3,
          name: "Ui Ux",
        },
      ],
    },
    mainData: [],
  },
  reducers: {
    setAllData: (state, { payload }) => {
      state.allData = { ...state.allData, ...payload };
    },
    setData: (state, { payload }) => {
      let arrayWithKeys = [];
      payload &&
        payload?.forEach((item, key) => {
          arrayWithKeys.push({ ...item, key });
        });
      state.mainData = arrayWithKeys;
    },
  },
});

export const { setAllData, setData } = counterSlice.actions;

export default counterSlice.reducer;
