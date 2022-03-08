import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const counterSlice = createSlice({
  name: "unsaved_reducer",
  initialState: {
    allData: {
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
      order_reason_id: [
        {
          id: 1,
          name: "Agent orqali",
          url:"/workers/all"
        },
        {
          id: 2,
          name: "Mijoz orqali",
          url:"/clients/active"
        },
        {
          id: 3,
          name: "Xodimlar orqali",
          url:"/workers/all"
        },
        {
          id: 4,
          name: "Reklama orqali ",
          url:"/reklams"
        },
        {
          id: 5,
          name: "Boshqa",
          url:""
        },
      ],
      order_reason:[],
    },
    searchInputValue:[],
    changeInputtype:true,
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
    setOrderReason : (state, { payload }) => {
      state.allData.order_reason = payload
    },
    setSearchInputValue: (state, { payload }) => {
      state.searchInputValue = payload
    },
    toogleInputType: (state, { payload }) => {
      state.changeInputtype = payload;
    }
  },
});

export const { setAllData, setData,setOrderReason, setSearchInputValue, toogleInputType } = counterSlice.actions;

export default counterSlice.reducer;
