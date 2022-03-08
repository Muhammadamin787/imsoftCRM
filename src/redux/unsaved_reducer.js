import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const allDataMain = {
  status: [
    {
      id: 1,
      name: "Yangi dastur",
    },
    {
      id: 2,
      name: "Jarayondagi",
    },
    {
      id: 3,
      name: "O'qitilayotgan",
    },
    {
      id: 4,
      name: "Topshirilgan",
    },
    {
      id: 5,
      name: "Bekor qilingan",
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
      name: "Agent orqali",
    },
    {
      id: 2,
      name: "Mijoz orqali",
    },
    {
      id: 3,
      name: "Xodimlar orqali",
    },
    {
      id: 4,
      name: "Reklama orqali ",
    },
    {
      id: 5,
      name: "Boshqa",
    },
  ],
  from_whom: [
    { id: 1, name: "bir" },
    { id: 2, name: "ikkii" },
  ],
};

export const counterSlice = createSlice({
  name: "unsaved_reducer",
  initialState: {
    allData: allDataMain,
    filterAllData: allDataMain,
    mainData: [],
  },
  reducers: {
    setAllData: (state, { payload }) => {
      state.allData = { ...state.allData, ...payload };
    },
    setData: (state, { payload }) => {
      // payload = [{dcfs}, {nm,}]
      let arrayWithKeys = [];
      payload &&
        payload?.forEach((item, key) => {
          arrayWithKeys.push({ ...item, key });
        });
      state.mainData = arrayWithKeys;
    },
    setFilterData: (s, { payload }) => {
      s.filterAllData = payload;
    },
    setFromWhom: (state, { payload }) => {
      state.allData.from_whom = payload;
    },
  },
});

export const { setAllData, setData, setFilterData } = counterSlice.actions;

export default counterSlice.reducer;
