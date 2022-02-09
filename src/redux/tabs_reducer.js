import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { AllServiceChildPages } from "../all Templates/pageTemplates/index";
import {AllCustomerChildPages} from "../all Templates/pageTemplates/index";

export const counterSlice = createSlice({
  name: "tabs_data",
  initialState: {
    Panes: [],
    currentPage: {},
    tableItem: {},
  },
  reducers: {
    addNewTab: (state, { payload }) => {
      if (AllServiceChildPages) {
        const bool = [...AllServiceChildPages, ...AllCustomerChildPages]?.find((a) =>
          a?.path === payload?.path ? true : false
        );
        if (bool) {
          state.Panes = _.uniqBy([...state?.Panes, payload], "path");
        }
      }
    },
    removeTab: (state, action) => {
      state.Panes.splice(action.payload, 1);
    },
    changePanes: (state, { payload }) => {
      state.Panes.splice(payload, 1);
    },
    toggleModal: (state, { payload }) => {
      state.currentPage.isOpenModal = payload;
    },
    setCurrentPage: (state, { payload }) => {
      console.log(payload);
      state.currentPage = payload;
    },
    changeCurrentPageData: (state, { payload }) => {
      if (payload) {
        state.currentPage.data = payload;
      }
    },
    setTableItem: (state, { payload }) => {
      state.tableItem = payload;
    },
    removeTableItem: (state, { payload }) => {
      state.currentPage.data = state.currentPage?.data?.filter(
        (el) => el.number != payload.number
      );
    },
    editTableItem: (state, { payload }) => {
      const www = state.currentPage.data.find(
        (data) => data.number === state.tableItem.number
      );

      console.log(www);
      console.log(state.currentPage);
      if (www) {
        state.currentPage[www.number] = www;
      }

      console.log(state.currentPage);
    },
  },
});

export const {
  addNewTab,
  removeTab,
  toggleModal,
  setCurrentPage,
  changeCurrentPageData,
  changePanes,
  setTableItem,
  removeTableItem,
  editTableItem,
} = counterSlice.actions;

export default counterSlice.reducer;
